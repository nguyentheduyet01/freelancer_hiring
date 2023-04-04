import React from "react";
import { Col, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

const DDFindJob = () => {
  return (
    <div
      style={{ margin: "0 auto", position: "absolute", top: "73px", left: "0", width: "100%" }}
      className='dropdown'
    >
      <Row
        style={{
          width: "100%",
          height: "60vh",
          padding: "20px 10px 30px 10px",
          borderBottom: "1px solid #BECCBE",
          boxShadow: "43px 15px 50px -14px #BECCBE",
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
          <div className='p-4 pt-0 pb-0 block-title d-flex align-items-center flex-row'>
            <div>
              <b className='width-title'>Tìm & Đăng Tin</b>
              <span className='subtitle'>Nơi hội tụ các freelancer chuyên nghiệp nhất</span>
            </div>
            <ChevronRight size={30} />
          </div>
          <div className='p-4 pt-0 pb-0 block-title'>
            <b className='width-title'>Tìm & Đăng Tin</b>
            <span className='subtitle'>Nơi hội tụ các freelancer chuyên nghiệp nhất</span>
          </div>
          <div className='p-4 pt-0 pb-0 block-title'>
            <b className='width-title'>Tìm & Đăng Tin</b>
            <span className='subtitle'>Nơi hội tụ các freelancer chuyên nghiệp nhất</span>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default DDFindJob;
