import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Pagination from "react-js-pagination";
import { Link, useLocation } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import Post from "../../components/post/Post";
import wireless from "../../images/wireless.png";
import "./Search.css";

const Search = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  let ht = location.pathname.split("/")[2] || "all";

  const items = [
    {
      value: "all",
      context: "Tất cả công việc",
      link: "",
    },
    {
      value: "passtime",
      context: "Việc bán thời gian",
      link: "passtime",
    },
    {
      value: "fulltime",
      context: "Việc toàn thời gian",
      link: "fulltime",
    },
  ];
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='mt-4' style={{ width: "1200px", margin: "0 auto" }}>
      <Row>
        <Col lg='3'>
          <Filter />
        </Col>
        <Col className='border p-0 rounded-4'>
          <div className='searchHeader d-flex mb-3'>
            {items.map((item, index) => {
              if (item.value === ht) {
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
          <div style={{ padding: "5px 46px" }} className='d-flex mt-3 mb-3'>
            <div className='d-flex'>
              <img src={wireless} alt='wireless' style={{ width: "18px", height: "18px" }} />
              <span style={{ marginLeft: "10px" }}>
                <span style={{ fontWeight: "700" }}>100.000</span> công việc
              </span>
            </div>
            <div></div>
          </div>
          <div className='mb-3'>
            <Post active='active' />
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
              itemClass='page-item'
              linkClass='page-link'
              activeClass='pageItemActive'
              activeLinkClass='pageLinkActive'
              // firstPageText='1st'
              // lastPageText='Last'
              // onClick={scrollChange}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
