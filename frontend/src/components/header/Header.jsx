import React, { useState } from "react";
import { Card, Button, Col, Form, Row } from "react-bootstrap";
import { ChevronDown, ChevronUp, Search } from "react-bootstrap-icons";
import Avatar from "../avatar/Avatar";
import DDFreelance from "../dropdown/DDFreelance";
import DDFindJob from "./../dropdown/DDFindJob";
import Logo from "../../images/icon_page.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowJob, setIsShowJob] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div style={{ borderBottom: "1px #BECCBE solid" }}>
        <Row style={{ width: "95%", margin: "0 auto", lineHeight: "70px" }}>
          <Col xs xm lg='2'>
            <Link to=''>
              <Card.Img src={Logo} style={{ width: "160px" }} />
            </Link>
          </Col>
          <Col xs xm lg='4'>
            <Row>
              <Col xm lg='5'>
                <span
                  className='menu-item'
                  onMouseLeave={() => setIsShow(() => false)}
                  onMouseEnter={() => setIsShow(() => true)}
                >
                  <span>Tìm kiếm việc làm</span>
                  {isShow && <DDFindJob />}
                </span>
                <span>{isShow ? <ChevronUp size={12} /> : <ChevronDown size={12} />}</span>
              </Col>
              <Col xm lg='5'>
                <span
                  className='menu-item'
                  onMouseLeave={() => setIsShowJob(() => false)}
                  onMouseEnter={() => setIsShowJob(() => true)}
                >
                  <span>Tuyển dụng</span>
                  {isShowJob && <DDFreelance />}
                </span>
                <span>{isShowJob ? <ChevronUp size={12} /> : <ChevronDown size={12} />}</span>
              </Col>
            </Row>
          </Col>
          <Col xs xm lg='3'>
            <Row className='mt-3'>
              <Col style={{ padding: "15  px 0 0 0" }}>
                <Form
                  style={{
                    position: "relative",
                    borderRadius: "100px",
                    border: "2px solid #e4ebe4",
                    height: "38px",
                    overflow: "hidden",
                  }}
                  className='formSearch'
                >
                  <Form.Group className='' controlId='' style={{ width: "240px" }}>
                    <Form.Control
                      type='text'
                      placeholder='search'
                      style={{
                        fontSize: "110%",
                        border: "none",
                        padding: "0 0 0 8px",
                      }}
                      className='input-none'
                    />
                  </Form.Group>
                  <Button
                    type='submit'
                    className='buttonSubmit'
                    style={{
                      backgroundColor: "transparent",
                      width: "60px",
                      height: "35px",
                      position: "absolute",
                      top: "0px",
                      right: "0",
                      border: "none",
                      borderRadius: "50px",
                    }}
                  >
                    <Search
                      size={20}
                      color='#5a645a'
                      style={{
                        position: "absolute",
                        top: "7px",
                        right: "15px",
                      }}
                    />
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isLogin ? (
              <>
                <Avatar />
              </>
            ) : (
              <Row>
                <Col>
                  <Button variant='light'>
                    <Link style={{ textDecoration: "none", color: "black" }} to='login'>
                      Login
                    </Link>
                  </Button>
                </Col>
                <Col>
                  <Button variant='success'>
                    <Link style={{ textDecoration: "none", color: "white" }} to='register'>
                      Register
                    </Link>
                  </Button>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Header;
