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
                  <Link className='linkFooter'>home</Link>
                </li>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <ul className='listFooter'>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <ul className='listFooter'>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <ul className='listFooter'>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
                <li>
                  <Link className='linkFooter'>home</Link>
                </li>
              </ul>
            </div>
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
        <p style={{ fontSize: "12px", textAlign: "center" }}>© 2015 - 2023 Molas® Global Inc.</p>
      </Container>
    </footer>
  );
};

export default Footer;
