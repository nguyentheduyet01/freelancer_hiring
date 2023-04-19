import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import LeftDropdown from "./LeftDropdown";

const DDFreelance = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowRight, setIsShowRight] = useState(false);

  const itemsLeft = [
    {
      id: "1",
      title: "Tìm & Đăng Tin",
      subtitle: "Nơi hội tụ các freelancer chuyên nghiệp nhất",
      chevronRight: "ChevronRight",
      enter: () => setIsShowRight(() => true),
      leave: () => setIsShowRight(() => false),
      isShow: isShowRight,
    },
  ];

  const itemsRight = [
    {
      subtitle: "Đăng tin nhận báo giá",
      chevronRight: "ChevronRight",
      enter: () => setIsShow(() => true),
      leave: () => setIsShow(() => false),
      isShow: isShow,
    },
    {
      subtitle: "Tìm theo freelancer",
    },
    {
      subtitle: "Tìm theo dự án đã làm",
    },
  ];

  const itemsFinal = [
    {
      subtitle: "Đăng việc theo thời gian",
    },
    {
      subtitle: "Đăng việc bán thời gian",
    },
    {
      subtitle: "Đăng việc toàn thời gian",
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
          <LeftDropdown itemsLeft={itemsLeft} itemsRight={itemsRight} itemsFinal={itemsFinal} />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default DDFreelance;
