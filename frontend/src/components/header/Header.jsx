import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Search, ChevronDown, ChevronUp, ChevronRight } from "react-bootstrap-icons";
import DDFreelance from "../dropdown/DDFreelance";
import "./Header.css";
import DDFindJob from "./../dropdown/DDFindJob";
import Avatar from "../avatar/Avatar";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowJob, setIsShowJob] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div style={{ borderBottom: "1px #BECCBE solid" }}>
        <Row style={{ width: "95%", margin: "0 auto", lineHeight: "70px" }}>
          <Col xs xm lg='2'>
            <div className='logo'>hello</div>
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
                  {isShow && <DDFreelance />}
                </span>
                <span>{isShow ? <ChevronUp size={12} /> : <ChevronDown size={12} />}</span>
              </Col>
              <Col xm lg='5'>
                <span
                  className='menu-item'
                  onMouseLeave={() => setIsShowJob(() => true)}
                  onMouseEnter={() => setIsShowJob(() => true)}
                >
                  <span>Tuyển dụng</span>
                  {isShowJob && <DDFindJob />}
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
                    border: "1px solid black",
                    height: "38px",
                    overflow: "hidden",
                  }}
                  className='formSearch'
                >
                  <Form.Group className='' controlId='formBasicEmail' style={{ width: "260px" }}>
                    <Form.Control
                      type='text'
                      placeholder='search'
                      style={{ fontSize: "110%", border: "none", padding: "0 0 0 8px" }}
                    />
                  </Form.Group>
                  <Button
                    type='submit'
                    className='buttonSubmit'
                    style={{
                      backgroundColor: "transparent",
                      width: "35px",
                      height: "35px",
                      position: "absolute",
                      top: "3px",
                      right: "0",
                      border: "none",
                    }}
                  >
                    <Search
                      size={20}
                      color='#5a645a'
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "7px",
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
                  <Button variant='light'>Login</Button>
                </Col>
                <Col>
                  <Button variant='success'>Register</Button>
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
