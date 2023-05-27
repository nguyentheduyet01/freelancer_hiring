import React from "react";
import { Card, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { Bell } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import avatar from "../../images/avatar.png";
import { logoutAction } from "../../reducer/actions/accountAction";
import { userLogoutAction } from "../../reducer/actions/userAction";

const Avatar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const pathImage = user?.images?.length > 0 ? user?.images[0] : avatar;
  const handleLogout = () => {
    dispatch(logoutAction());
    dispatch(userLogoutAction());
    navigate("/");
  };

  return (
    <Row style={{ width: "100%" }}>
      <Col xm='2' lg='2' style={{ display: "flex", alignItems: "center", padding: "0" }}>
        <Link className='Notification'>
          <Bell size={20} color='#5a645a' />
        </Link>
      </Col>
      <Col
        xm='3'
        lg='3'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "40px", borderRadius: "50%", overflow: "hidden" }}>
          <Card.Img src={pathImage} />
        </Card>
      </Col>
      <Col xm='7' lg='7' style={{ padding: "0 5px" }}>
        <DropdownButton
          id='dropdown-basic-button'
          title={`${user?.name}`}
          style={{ width: "30px !important" }}
        >
          <Dropdown>
            <Dropdown.Item>
              <Link to='profile' style={{ textDecoration: "none", color: "black" }}>
                Hồ sơ cá nhân
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='profile/update' style={{ textDecoration: "none", color: "black" }}>
                Chỉnh sửa hồ sơ
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='profile/setting' style={{ textDecoration: "none", color: "black" }}>
                Cài đặt chung
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='myposts' style={{ textDecoration: "none", color: "black" }}>
                Quản lý bài đăng
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
            {/* <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item> */}
          </Dropdown>
        </DropdownButton>
      </Col>
      <Outlet />
    </Row>
  );
};

export default Avatar;
