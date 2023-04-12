import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import image from "../../images/buoc-2-lam-viec.png";

const DetailQuotes = () => {
  return (
    <div className='mt-3'>
      <Row>
        <Col
          xm='6'
          lg='6'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h4
              className='textDetail'
              style={{ fontWeight: "400", lineHeight: "45px", fontSize: "35px" }}
            >
              <div>
                Kết nối <span style={{ fontWeight: "700" }}>nhanh chóng,</span>
              </div>
              <span style={{ fontWeight: "700" }}>Rút ngắn thời gian</span> tìm nhân sự
            </h4>
            <div>
              <p
                style={{
                  width: "430px",
                  fontSize: "16px",
                  letterSpacing: "-.03em",
                  color: "#666",
                }}
              >
                Molas kết nối bạn với Freelancer/Cộng tác viên trên lãnh thổ Việt Nam và quốc tế.
                Công việc của bạn sẽ nhanh chóng được giải quyết với chất lượng cao.
              </p>
            </div>
          </div>
        </Col>
        <Col xm='6' lg='6' className='d-flex justify-content-center'>
          <Card.Img src={image} alt='picture' style={{ width: "496px", height: "336px" }} />
        </Col>
      </Row>
    </div>
  );
};

export default DetailQuotes;
