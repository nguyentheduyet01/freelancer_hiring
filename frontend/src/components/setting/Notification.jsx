import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Setting.css";
import { statusUserAction } from "../../reducer/actions/userAction";

const Notification = () => {
  const [status, setStatus] = useState();
  const [newStatus, setNewStatus] = useState();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleStatus = (e, val, st) => {
    setNewStatus(val);
    setStatus(st);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(statusUserAction({ idUser: user?.id, status: newStatus }));
  };

  useEffect(() => {
    setStatus(user?.status === 1 ? true : false);
  }, [user]);
  return (
    <div className='mt-4'>
      <Form onSubmit={handleSubmit}>
        <h6>Bạn có muốn tìm kiếm việc làm?</h6>
        <div className='d-flex justify-content-between' style={{ width: "140px" }}>
          <div className='d-flex'>
            <label className='label d-flex align-items-center' style={{ width: "25px" }}>
              <input
                type='radio'
                name='status'
                onChange={(e) => handleStatus(e, 1, true)}
                checked={status}
              />
              <span className='checkmarkRadio'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Có
            </div>
          </div>
          <div className='d-flex'>
            <label className='label d-flex align-items-center' style={{ width: "25px" }}>
              <input
                type='radio'
                name='status'
                onChange={(e) => handleStatus(e, 0, false)}
                checked={!status}
              />
              <span className='checkmarkRadio'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Không
            </div>
          </div>
        </div>
        <button
          type='submit'
          style={{ border: "none", outline: "none", backgroundColor: "#074d07", color: "white" }}
        >
          Lưu
        </button>
      </Form>
    </div>
  );
};

export default Notification;
