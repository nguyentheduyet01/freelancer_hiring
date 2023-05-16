import { State } from "country-state-city";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Pagination, Row } from "react-bootstrap";
import { ChevronLeft, ChevronRight, XCircle } from "react-bootstrap-icons";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch } from "react-redux";
import Freelancer from "../../components/freelancer/Freelancer";
import { getAllUserAction } from "../../reducer/actions/userAction";
import "./Search.css";

const FreelanceSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const options = State.getStatesOfCountry("VN");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isClose, setIsClose] = useState(false);
  let newSelected = [];

  useEffect(() => {
    dispatch(getAllUserAction({}));
  }, [dispatch]);

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
                  Kỹ năng
                </span>
                <div className='d-flex'>
                  <label className='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span className='checkmark'></span>
                  </label>
                  <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    Node.js
                  </div>
                </div>
                <div className='d-flex'>
                  <label className='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span className='checkmark'></span>
                  </label>
                  <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    JavaScript
                  </div>
                </div>
                <div className='d-flex'>
                  <label className='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span className='checkmark'></span>
                  </label>
                  <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    React
                  </div>
                </div>
                <div className='d-flex'>
                  <label className='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span className='checkmark'></span>
                  </label>
                  <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    MongoDB
                  </div>
                </div>
                <div className='d-flex'>
                  <label className='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span className='checkmark'></span>
                  </label>
                  <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    PHP
                  </div>
                </div>
                <div className='d-flex'>
                  <label className='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span className='checkmark'></span>
                  </label>
                  <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
                    TypeScript
                  </div>
                </div>
                <div className='d-flex'>
                  <label className='label d-flex align-items-center'>
                    <input type='checkbox' />
                    <span className='checkmark'></span>
                  </label>
                  <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
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
          <div style={{ padding: "5px 46px" }} className=' mt-3 mb-3'>
            <div>
              <Form>
                <Form.Group className='mb-3 d-flex' controlId='search'>
                  <Form.Control
                    type='text'
                    placeholder='Tìm kiếm freelancer'
                    style={{ borderRadius: "10px 0 0 10px " }}
                  />
                  <button type='submit' className='btnSearch'>
                    Tìm kiếm
                  </button>
                </Form.Group>
              </Form>
            </div>
            <div></div>
          </div>
          <div>
            <Freelancer style={{}} />
          </div>
          <div className='mb-3'></div>
          <div className='paginationBox'>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={2}
              totalItemsCount={10}
              onChange={setCurrentPageNo}
              nextPageText={<ChevronRight />}
              prevPageText={<ChevronLeft />}
              itemclassName='page-item'
              linkclassName='page-link'
              activeclassName='pageItemActive'
              activeLinkclassName='pageLinkActive'
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
