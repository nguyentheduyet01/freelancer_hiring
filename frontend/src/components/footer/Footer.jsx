import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Youtube, Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer
      className='footer mb-3 mt-4'
      style={{ backgroundColor: "#001e00", width: "100%", color: "white", padding: "40px 0" }}
    >
      <Container>
        <Row>
          <Col>
            <div>
              <ul className='listFooter'>
                <li>
                  <Link className='linkFooter'>KHÁCH HÀNG</Link>
                </li>
                <li>
                  <Link className='linkFooter'>Cách thuê freelancer</Link>
                </li>
                <li>
                  <Link className='linkFooter'>Hướng dẫn đăng việc</Link>
                </li>
                <li>
                  <Link className='linkFooter'>Hướng dẫn chọn freelancer</Link>
                </li>
                <li>
                  <Link className='linkFooter'>Hướng dẫn liên hệ freelancer</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <ul className='listFooter'>
                <li>
                  <Link className='linkFooter'>FREELANCER</Link>
                </li>
                <li>
                  <Link className='linkFooter'>Hướng dẫn freelancer kiếm tiền </Link>
                </li>
                <li>
                  <Link className='linkFooter'>HƯớng dẫn freelancer hoàn thiện hồ sơ </Link>
                </li>
                <li>
                  <Link className='linkFooter'>HƯớng dẫn chào giá dự án</Link>
                </li>
                <li>
                  <Link className='linkFooter'>Hướng dẫn tạo gói dịch vụ</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <ul className='listFooter'>
                <li>
                  <Link className='linkFooter'>LIÊN HỆ</Link>
                </li>
                <li>
                  <Link className='linkFooter'>Trợ giúp</Link>
                </li>
                <li>
                  <Link className='linkFooter'>Câu hỏi thường gặp</Link>
                </li>
                <li>
                  <Link className='linkFooter'>Thông báo lỗi</Link>
                </li>
                <li>
                  <Link className='linkFooter'>Liên hệ</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5400.1820424054895!2d105.80328354060212!3d21.02844562269753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab424a50fff9%3A0xbe3a7f3670c0a45f!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBHaWFvIFRow7RuZyBW4bqtbiBU4bqjaQ!5e0!3m2!1svi!2s!4v1685984451567!5m2!1svi!2s" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>

        </Row>
        <Row className='mt-4'>
          <Col xm='3' lg='3'>
            <div className='d-flex justify-content-between'>
              <p className='iconMedia'>
                <Youtube />
              </p>
              <p className='iconMedia'>
                <Facebook />
              </p>
              <p className='iconMedia'>
                <Instagram />
              </p>
              <p className='iconMedia'>
                <Linkedin />
              </p>
              <p className='iconMedia'>
                <Twitter />
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <p style={{ fontSize: "12px", textAlign: "center" }}>© 2019 - 2023 Molas® Đồ án ra trường.</p>
      </Container>
    </footer>
  );
};

export default Footer;
