import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChangePass from "../../components/setting/ChangePass";
import "./Profile.css";

const Setting = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Container className='border rounded-4 mt-5' style={{ height: "80vh" }}>
        <div className='header-profile mt-3'>
          <div className={`header-item active`}>
            <Link to='password' style={{ textDecoration: "none", color: "#3399cc" }}>
              Thay đổi mật khẩu
            </Link>
          </div>
        </div>
        <hr />
        <div className='mt-4' style={{ padding: "10px 43px" }}>
          <ChangePass />
        </div>
      </Container>
    </>
  );
};

export default Setting;
