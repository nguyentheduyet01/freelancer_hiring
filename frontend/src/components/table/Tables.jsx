import React, { useState } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatVND from "../../utils/formatVND";
import Loader from "../Loader/Loader";
import "./Table.css";
import { getUserApplyPostAction } from "../../reducer/actions/postAction";
import axios from "../../utils/instance";

const Tables = ({ post, headers }) => {
  const dispatch = useDispatch();
  const { posts, isLoad, received } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.post);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShow, setIsShow] = useState(false);
  // const { data } = user;
  const handleClose = () => setIsShow(false);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
    console.log(e);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClick = (id) => {
    setIsShow(true);
    dispatch(getUserApplyPostAction(id));
  };

  const downloadCv = async (id) => {
    const link = document.createElement("a");
    link.href = `https://localhost:7001/api/filedatas/${id}`;

    const clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true,
    });

    link.dispatchEvent(clickEvent);
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
                    <tr key={item?.id} onClick={() => handleClick(item?.id)}>
                      <td>{index + 1}</td>
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
                      <td>{index + 1}</td>
                      <td>
                        <Link to={`/posts/${item?.post?.id}`}>{item?.post?.title}</Link>
                      </td>
                      <td>
                        {item?.workingMethod === 1
                          ? "Việc làm bán thời gian"
                          : item?.workingMethod === 2
                          ? "Việc làm toàn thời gian"
                          : "Việc làm theo dự án"}
                      </td>
                      <td>{item?.userpost?.intendTime}</td>
                      <td>{formatVND(item?.userpost?.salary)}</td>
                      <td>
                        <Button
                          onClick={() => {
                            downloadCv(item?.userpost?.cvId);
                          }}
                        >
                          Tải xuống
                        </Button>
                      </td>
                    </tr>
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
      <>
        <Offcanvas show={isShow} onHide={handleClose} placement='end' style={{ width: "55%" }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Table responsive className='mt-3'>
              <thead>
                <tr>
                  <th>stt</th>
                  <th>Người ứng tuyển</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Giá thương lượng</th>
                  <th>cv</th>
                </tr>
              </thead>
              <tbody>
                {user?.data &&
                  user?.data?.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Link to={`/freelancer/${item?.user?.id}`}>{item?.user?.name}</Link>
                      </td>
                      <td>{item?.user?.phone}</td>
                      <td>{item?.user?.email}</td>
                      <td>{formatVND(item?.userpost?.salary)}</td>
                      <td>
                        <Button onClick={() => downloadCv(item?.userpost?.cvId)}>Tải cv</Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </>
  );
};

export default Tables;
