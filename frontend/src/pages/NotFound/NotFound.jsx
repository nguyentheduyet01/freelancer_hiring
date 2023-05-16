import React from "react";
import "./NotFound.css";
import { Button, Container } from "react-bootstrap";
import notFound from "../../images/not-found.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Container style={{ margin: "0 auto", height: "75vh" }}>
      <div className='d-flex justify-content-center mt-5'>
        <img src={notFound} alt='not-found.png' style={{ width: "256px" }} />
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <h5>
          <Link to=''>Quay lại trang chủ</Link>
        </h5>
      </div>
    </Container>
  );
};

export default NotFound;
