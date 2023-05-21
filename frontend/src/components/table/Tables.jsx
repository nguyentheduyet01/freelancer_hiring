import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Pagination from "react-js-pagination";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatVND from "../../utils/formatVND";
import Loader from "../Loader/Loader";
import "./Table.css";

const Tables = ({ post, headers }) => {
  const { posts, isLoad, received } = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
    console.log(e);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          {post === "post" ? (
            <Table responsive className='mt-3'>
              <thead>
                <tr>
                  {headers && headers?.map((item, index) => <th key={index}>{item?.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {posts &&
                  posts?.data?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>{index}</td>
                      <td>
                        <Link to={`/posts/${item?.id}`}>{item?.title}</Link>
                      </td>
                      <td>
                        {item?.workingMethod === 1
                          ? "Việc làm bán thời gian"
                          : item?.workingMethod === 2
                          ? "Việc làm toàn thời gian"
                          : "Việc làm theo dự án"}
                      </td>
                      <td>{formatVND(item?.budget)}</td>
                      <td>{item?.status === 0 ? "Đang duyệt" : "Đã duyệt"}</td>
                    </tr>
                    // <div>{item?.title}</div>
                  ))}
              </tbody>
            </Table>
          ) : (
            <Table responsive className='mt-3'>
              <thead>
                <tr>
                  {headers && headers?.map((item, index) => <th key={index}>{item?.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {received &&
                  received?.data?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>{index}</td>
                      <td>
                        <Link to={`/posts/${item?.id}`}>{item?.title}</Link>
                      </td>
                      <td>
                        {item?.workingMethod === 1
                          ? "Việc làm bán thời gian"
                          : item?.workingMethod === 2
                          ? "Việc làm toàn thời gian"
                          : "Việc làm theo dự án"}
                      </td>
                      <td>{formatVND(item?.budget)}</td>
                      <td>{item?.status === 0 ? "Đang duyệt" : "Đã duyệt"}</td>
                    </tr>
                    // <div>{item?.title}</div>
                  ))}
              </tbody>
            </Table>
          )}
          <div className='paginationBox'>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={2}
              totalItemsCount={received?.totalCount}
              onChange={setCurrentPageNo}
              nextPageText={<ChevronRight />}
              prevPageText={<ChevronLeft />}
              itemClassName='page-item'
              linkClassName='page-link'
              activeClassName='pageItemActive'
              activeLinkClassName='pageLinkActive'
              className='rbt-input-multi'
              // firstPageText='1st'
              // lastPageText='Last'
              // onClick={scrollChange}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Tables;
