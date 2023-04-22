import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Search.css";
import Post from "./../../components/post/Post";
import Pagination from "react-js-pagination";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const Search = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  let q = location.search.split("=")[1] || "all";

  const items = [
    {
      value: "all",
      context: "Tất cả công việc",
      link: "?q=all",
    },
    {
      value: "passtime",
      context: "Việc bán thời gian",
      link: "?q=passtime",
    },
    {
      value: "fulltime",
      context: "Việc toàn thời gian",
      link: "?q=fulltime",
    },
  ];
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  return (
    <div className='mt-4' style={{ width: "1200px", margin: "0 auto" }}>
      <Row>
        <Col className='border' lg='3'>
          hello
        </Col>
        <Col className='border p-0'>
          <div className='searchHeader d-flex mb-3'>
            {items.map((item, index) => {
              if (item.value === q) {
                return (
                  <div key={index} className='searchItem active'>
                    <Link
                      style={{ textDecoration: "none", color: "black", fontWeight: "500" }}
                      to={item.link}
                    >
                      {item.context}
                    </Link>
                  </div>
                );
              } else {
                return (
                  <div key={index} className='searchItem'>
                    <Link
                      style={{ textDecoration: "none", color: "black", fontWeight: "500" }}
                      to={item.link}
                    >
                      {item.context}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <div className='mb-3'>
            <Post />
            <Post />
            <Post />
          </div>
          <div className='paginationBox'>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={2}
              totalItemsCount={10}
              onChange={setCurrentPageNo}
              nextPageText={<ChevronRight />}
              prevPageText={<ChevronLeft />}
              // firstPageText='1st'
              // lastPageText='Last'
              itemClass='page-item'
              linkClass='page-link'
              activeClass='pageItemActive'
              activeLinkClass='pageLinkActive'
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
