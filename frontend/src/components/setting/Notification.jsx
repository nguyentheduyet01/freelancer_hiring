import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Setting.css";

const Notification = () => {
  const [status, setStatus] = useState();

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(status);
  };

  return (
    <div className='mt-4'>
      <Form onSubmit={handleSubmit}>
        <h6>Bạn có muốn tìm kiếm việc làm</h6>
        <div className='d-flex justify-content-between' style={{ width: "140px" }}>
          <div className='d-flex'>
            <label className='label d-flex align-items-center' style={{ width: "25px" }}>
              <input type='radio' name='status' onChange={handleStatus} value={0} />
              <span className='checkmarkRadio'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Có
            </div>
          </div>
          <div className='d-flex'>
            <label className='label d-flex align-items-center' style={{ width: "25px" }}>
              <input type='radio' name='status' onChange={handleStatus} value={1} checked />
              <span className='checkmarkRadio'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Không
            </div>
          </div>
        </div>
        <button type='submit'>Lưu</button>
      </Form>
    </div>
  );
};

export default Notification;
