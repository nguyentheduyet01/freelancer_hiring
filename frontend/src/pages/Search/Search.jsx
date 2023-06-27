import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import Post from "../../components/post/Post";
import wireless from "../../images/wireless.png";
import { getAllPostAction } from "../../reducer/actions/postAction";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { data } = posts;
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchAdd, setSearchAdd] = useState();
  const [searchCate, setSearchCate] = useState("");
  let ht = location.pathname.split("/")[2] || "all";
  const workingMethod = ht === "passtime" ? 1 : ht === "fulltime" ? 2 : 0;
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
    // dispatch(getAllPostAction({ pagesize: 5, pageindex: posts?.pageIndex || 1 }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const search = localStorage.getItem("search") ? JSON.parse(localStorage.getItem("search")) : "";
  // const address = localStorage.getItem("address")
  //   ? JSON.parse(localStorage.getItem("address"))
  //   : "";

  useEffect(() => {
    if (search !== "" || searchCate !== "") {
      setSearchAdd("");
    }

    let searchh = "";
    if (searchCate === "") {
      searchh = {
        pagesize: 5,
        pageindex: currentPage,
        search: search,
        address: searchAdd,
        workingMethod: workingMethod,
      };
    } else {
      searchh = {
        pagesize: 5,
        pageindex: currentPage,
        search: search,
        address: searchAdd,
        category: searchCate,
        workingMethod: workingMethod,
      };
    }
    dispatch(getAllPostAction(searchh));
  }, [dispatch, currentPage, search, searchAdd, searchCate, workingMethod]);

  return (
    <div className="mt-4" style={{ width: "1200px", margin: "0 auto" }}>
      <Row>
        <Col lg="3">
          <Filter setSearchAdd={setSearchAdd} setSearchCate={setSearchCate} />
        </Col>
        <Col className="border p-0 rounded-4" style={{ overflow: "hidden" }}>
          <div className="searchHeader d-flex mb-3">
            {items.map((item, index) => {
              if (item.value === ht) {
                return (
                  <div key={index} className="searchItem active">
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
                  <div key={index} className="searchItem">
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
          <div style={{ padding: "5px 46px" }} className="d-flex mt-3 mb-3">
            <div className="d-flex">
              <img src={wireless} alt="wireless" style={{ width: "18px", height: "18px" }} />
              <span style={{ marginLeft: "10px" }}>
                <span style={{ fontWeight: "700" }}>{posts?.totalCount}</span> công việc
              </span>
            </div>
            <div></div>
          </div>
          <div className="mb-3">
            {data?.length === 0 && (
              <div style={{ textAlign: "center", height: "60vh" }} className="mt-5">
                <h5>Không tìm thấy bài đăng</h5>
              </div>
            )}
            {data?.length !== 0 &&
              data?.map((item, index) => {
                if (index === 0) {
                  return <Post key={index} item={item} active="active" />;
                }
                return <Post key={index} item={item} />;
              })}
          </div>
          <div className="paginationBox">
            {data?.length !== 0 && (
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={1}
                totalItemsCount={posts?.totalPage || 5}
                onChange={setCurrentPageNo}
                nextPageText={<ChevronRight />}
                prevPageText={<ChevronLeft />}
                itemClassName="page-item"
                linkClassName="page-link"
                activeClassName="pageItemActive"
                activeLinkClassName="pageLinkActive"
                // firstPageText='1st'
                // lastPageText='Last'
                // onClick={scrollChange}
              />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
