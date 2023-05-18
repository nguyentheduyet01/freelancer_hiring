import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import MetaData from "../metadata/MetaData";
import { showToastMessageError, showToastMessageSuccess } from "./../../utils/toastify";
import { useDispatch, useSelector } from "react-redux";
import { changPassAction, logoutAction } from "../../reducer/actions/accountAction";
import { clearMessage } from "../../reducer/slice/accountSlice";

const ChangePass = () => {
  const [validated, setValidated] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { account, changeSuccess, message } = useSelector((state) => state.account);
  const handlePass = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (user.password !== user.confirm) {
      setValidated(false);
      showToastMessageError("Mật khẩu không trùng");
    } else {
      if (form.checkValidity() !== false) {
        const news = {
          oldPassword: user.oldPassword,
          password: user.password,
        };
        dispatch(changPassAction({ id: account.data.accountId, pass: news }));
      }
      if (form.checkValidity() === false) {
        e.stopPropagation();
      }
      setValidated(true);
    }
  };
  useEffect(() => {
    if (changeSuccess && message === "") {
      showToastMessageSuccess("Đổi mật khẩu thành công");
      dispatch(clearMessage());
      dispatch(logoutAction());
    }
    if (message !== "") {
      showToastMessageError(message);
    }
  }, [changeSuccess, dispatch, message]);
  return (
    <div>
      <MetaData title='Change Password' />
      <Form onSubmit={handleSubmit} noValidate validated={validated} style={{ width: "50%" }}>
        <Form.Group className='mb-3' controlId='oldPassword'>
          <Form.Label>Mật khẩu hiện tại</Form.Label>
          <Form.Control
            required
            type='password'
            name='oldPassword'
            placeholder='Nhập mật khẩu Hiện tại'
            onChange={handlePass}
          />
          <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Mật khẩu Mới</Form.Label>
          <Form.Control
            required
            type='password'
            name='password'
            placeholder='Nhập mật khẩu Mới'
            onChange={handlePass}
          />
          <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' controlId='confirm'>
          <Form.Label>Xác nhận</Form.Label>
          <Form.Control
            required
            type='password'
            name='confirm'
            placeholder='Nhập mật khẩu xác nhận'
            onChange={handlePass}
          />
          {confirm ? (
            <Form.Control.Feedback type='invalid'>Mật khẩu không trùng</Form.Control.Feedback>
          ) : (
            <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <div style={{ width: "20%" }}></div>
          <Button variant='warning' type='submit' style={{ fontWeight: "500" }}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ChangePass;
