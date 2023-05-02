import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import LeftDropdown from "./LeftDropdown";

const DDFindJob = () => {
  const [isShow, setIsShow] = useState(false);
  // const [isShowRight, setIsShowRight] = useState(false);

  const items = [
    {
      id: "1",
      title: "Tìm Việc làm",
      subtitle: "Hàng ngàn công việc mới được đăng mỗi này",
      chevronRight: "ChevronRight",
      enter: () => setIsShow(() => true),
      leave: () => setIsShow(() => false),
      isShow: isShow,
      itemsRight: [
        // {
        //   subtitle: "Đăng tin nhận báo giá",
        //   chevronRight: "ChevronRight",
        //   enter: () => setIsShowRight(() => true),
        //   leave: () => setIsShowRight(() => false),
        //   isShow: isShowRight,
        //   itemsFinal: [
        //     {
        //       subtitle: "Đăng việc theo thời gian",
        //     },
        //     {
        //       subtitle: "Đăng việc bán thời gian",
        //     },
        //     {
        //       subtitle: "Đăng việc toàn thời gian",
        //     },
        //   ],
        // },
        {
          subtitle: "Việc online",
          link: "search",
        },
        {
          subtitle: "Việc toàn thời gian",
          link: "search?q=fulltime",
        },
        {
          subtitle: "Việc bán thời gian",
          link: "search?q=pasttime",
        },
      ],
    },
    {
      id: "2",
      title: "Tìm gói dịch vụ",
      subtitle: "Kết nối làm việc với chuyên gia trong lĩnh vực",
    },
  ];

  return (
    <div
      style={{
        margin: "0 auto",
        position: "absolute",
        top: "71px",
        left: "0",
        width: "100%",
        backgroundColor: "white",
        zIndex: "10000",
      }}
      className='dropdown'
    >
      <Row
        style={{
          width: "100%",
          height: "60vh",
          padding: "20px 10px 30px 10px",
          borderBottom: "1px solid #BECCBE",
          boxShadow: "1px 2px 8px 0px #BECCBE",
          margin: "0",
          lineHeight: "20px",
          backgroundColor: "white",
        }}
      >
        <Col
          style={{ borderRight: "1.5px solid #BECCBE" }}
          xm='4'
          lg='4'
          className='d-flex align-items-center flex-column pt-3'
        >
          <LeftDropdown items={items} />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default DDFindJob;
