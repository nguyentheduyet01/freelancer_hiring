import React from "react";
import { Card, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import { Bell } from "react-bootstrap-icons";

const Avatar = () => {
  return (
    <Row style={{ width: "100%" }}>
      <Col xm lg='2' style={{ display: "flex", alignItems: "center", padding: "0" }}>
        <a className='Notification'>
          <Bell size={20} color='#5a645a' />
        </a>
      </Col>
      <Col
        xm
        lg='3'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "40px", borderRadius: "50%", overflow: "hidden" }}>
          <Card.Img src={avatar} />
        </Card>
      </Col>
      <Col xm lg='7' style={{ padding: "0 5px" }}>
        <DropdownButton
          id='dropdown-basic-button'
          title='Nguyễn Thế Vũ'
          style={{ width: "30px !important" }}
        >
          <Dropdown>
            <Dropdown.Item href='#/action-1'>Hồ sơ cá nhân</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Logout</Dropdown.Item>
            {/* <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item> */}
          </Dropdown>
        </DropdownButton>
      </Col>
    </Row>
  );
};

export default Avatar;
