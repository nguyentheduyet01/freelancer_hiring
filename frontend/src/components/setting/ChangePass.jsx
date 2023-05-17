import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import MetaData from "../metadata/MetaData";

const ChangePass = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() !== false) {
    }
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div>
      <MetaData title='Change Password' />
      <Form onSubmit={handleSubmit} noValidate validated={validated} style={{ width: "50%" }}>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Mật khẩu hiện tại</Form.Label>
          <Form.Control
            required
            type='password'
            name='password'
            placeholder='Nhập mật khẩu Hiện tại'
            // onChange={handleCreatePost}
          />
          <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Mật khẩu Mới</Form.Label>
          <Form.Control
            required
            type='password'
            name='password'
            placeholder='Nhập mật khẩu Mới'
            // onChange={handleCreatePost}
          />
          <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Xác nhận</Form.Label>
          <Form.Control
            required
            type='password'
            name='password'
            placeholder='Nhập mật khẩu xác nhận'
            // onChange={handleCreatePost}
          />
          <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
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
