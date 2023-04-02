import React from "react";
import { Col, Row } from "react-bootstrap";

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
        }}
      >
        <Col style={{ borderRight: "1.5px solid #BECCBE" }} xm lg='4'></Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default DDFindJob;
