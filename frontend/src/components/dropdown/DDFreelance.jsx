import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import LeftDropdown from "./LeftDropdown";

const DDFreelance = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowRight, setIsShowRight] = useState(false);

  const itemsLeft = [
    {
      id: "1",
      title: "Tìm Việc làm",
      subtitle: "Hàng ngàn công việc mới được đăng mỗi này",
      chevronRight: "ChevronRight",
      enter: () => setIsShowRight(() => true),
      leave: () => setIsShowRight(() => false),
      isShow: isShowRight,
      itemsRight: [
        {
          subtitle: "Đăng tin nhận báo giá",
          chevronRight: "ChevronRight",
          enter: () => setIsShow(() => true),
          leave: () => setIsShow(() => false),
          isShow: isShow,
          itemsFinal: [
            {
              subtitle: "Đăng việc theo dự án",
              link: "posts?ht=project",
            },
            {
              subtitle: "Đăng việc bán thời gian",
              link: "posts?ht=pastime",
            },
            {
              subtitle: "Đăng việc toàn thời gian",
              link: "posts?ht=fulltime",
            },
          ],
        },
        {
          subtitle: "Tìm theo freelancer",
        },
        {
          subtitle: "Tìm theo dự án đã làm",
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
        }}
      >
        <Col
          style={{ borderRight: "1.5px solid #BECCBE" }}
          xm
          lg='4'
          className='d-flex align-items-center flex-column pt-3'
        >
          <LeftDropdown itemsLeft={itemsLeft} />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default DDFreelance;
