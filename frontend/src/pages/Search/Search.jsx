import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Search.css";
import Post from "./../../components/post/Post";

const Search = () => {
  const location = useLocation();
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
        </Col>
      </Row>
    </div>
  );
};

export default Search;
