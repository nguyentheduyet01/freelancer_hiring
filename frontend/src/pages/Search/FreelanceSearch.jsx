import React, { useRef, useState } from "react";
import { Button, Col, Pagination, Row } from "react-bootstrap";
import { ChevronLeft, ChevronRight, XCircle } from "react-bootstrap-icons";
import wireless from "../../images/wireless.png";
import "./Search.css";
import Post from "../../components/post/Post";
import { State } from "country-state-city";
import { Typeahead } from "react-bootstrap-typeahead";

const FreelanceSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ref = useRef(null);
  const options = State.getStatesOfCountry("VN");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isClose, setIsClose] = useState(false);
  let newSelected = [];

  const handleSelected = (selected) => {
    setSelectedOptions(selected);
    newSelected = selectedOptions.map((item) => item.name);
    setIsClose(true);
  };
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
          <div className='searchHeader d-flex mb-3 '>
            <div className='searchItem text-start' style={{ width: "100%" }}>
              {" "}
              <span style={{ color: "black", fontWeight: "500", fontSize: "130%" }}>Lọc theo</span>
              <div>
                <span style={{ fontWeight: "500", fontSize: "95%", color: "#003342" }}>
                  Khoảng giá
                </span>
                <div className='d-flex'>
                  <label class='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span class='checkmark'></span>
                  </label>
                  <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    Node.js
                  </div>
                </div>
                <div className='d-flex'>
                  <label class='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span class='checkmark'></span>
                  </label>
                  <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    JavaScript
                  </div>
                </div>
                <div className='d-flex'>
                  <label class='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span class='checkmark'></span>
                  </label>
                  <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    React
                  </div>
                </div>
                <div className='d-flex'>
                  <label class='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span class='checkmark'></span>
                  </label>
                  <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    MongoDB
                  </div>
                </div>
                <div className='d-flex'>
                  <label class='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span class='checkmark'></span>
                  </label>
                  <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    PHP
                  </div>
                </div>
                <div className='d-flex'>
                  <label class='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span class='checkmark'></span>
                  </label>
                  <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    TypeScript
                  </div>
                </div>
                <div className='d-flex'>
                  <label class='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span class='checkmark'></span>
                  </label>
                  <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    Vue.js
                  </div>
                </div>
                <hr />
              </div>
              <div style={{ position: "relative" }}>
                <span style={{ fontWeight: "500", fontSize: "95%", color: "#003342" }}>
                  Thành phố
                </span>

                <Typeahead
                  // defaultSelected={options.slice(0, 4)}
                  id='public-methods-example'
                  labelKey='name'
                  multiple
                  options={options}
                  placeholder='Chọn thành phố...'
                  ref={ref}
                  onChange={handleSelected}
                  selected={selectedOptions}
                  className='mt-2 mb-3'
                />
                {isClose && (
                  <Button
                    onClick={() => {
                      ref.current?.clear();
                      setIsClose(false);
                    }}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "black",
                      position: "absolute",
                      top: "50px",
                      right: "-6px",
                    }}
                  >
                    <XCircle />
                  </Button>
                )}
                <hr />
              </div>
            </div>
          </div>
        </Col>
        <Col className='border p-0 rounded-4'>
          <div className='searchHeader d-flex mb-3'></div>
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

export default FreelanceSearch;
