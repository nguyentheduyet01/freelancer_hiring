import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import pen from "../../images/pen.png";
import placeholder from "../../images/placeholder.png";
import email from "../../images/email.png";
import phone from "../../images/phone-call.png";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const pathImage = user?.images?.length > 0 ? user?.images[0] : avatar;
  const date = new Date();
  return (
    <>
      <Container>
        <Row className='border p-3 rounded-4 mt-5'>
          <Col className='d-flex'>
            <div className='p-2 d-flex flex-column justify-content-center' style={{ width: "20%" }}>
              <img
                src={pathImage}
                alt='avatar'
                style={{ width: "100%" }}
                className='rounded-circle'
              />
            </div>
            <div className='d-flex flex-column justify-content-center'>
              <div className='d-flex'>
                <h4>{user?.name}</h4>
                <Link to='update'>
                  <p className='penCircle'>
                    <img src={pen} alt='pen' style={{ width: "20px" }} />
                  </p>
                </Link>
              </div>
              <div>
                <img src={placeholder} alt='placeholder' style={{ width: "25px" }} />
                <span style={{ color: "gray" }}>
                  {user?.address} - {date.toLocaleString()}
                </span>
              </div>
            </div>
          </Col>
          <Col className='d-flex justify-content-center'>
            <div className='information border px-5 py-4' style={{ width: "75%" }}>
              <h4>Thông tin liên lạc</h4>
              <div>
                <div>
                  <img src={email} alt='email' />
                  <span style={{ marginLeft: "10px" }}>{user?.email}</span>
                </div>
                <div>
                  <img src={phone} alt='phone' />
                  <span style={{ marginLeft: "10px" }}>{user?.phone}</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='border p-3 rounded-4 mt-5'>
          <div>
            <div>
              <h5>Giới thiệu</h5>
            </div>
            <div>
              <h5>Tóm lược</h5>
            </div>
          </div>
          <div></div>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
