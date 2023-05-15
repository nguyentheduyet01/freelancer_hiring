import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import { updateUserAction } from "../../reducer/actions/userAction";
import "./Profile.css";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const { user } = useSelector((state) => state.user);

  const [newUser, setNewUser] = useState({
    name: user?.name,
    gentle: user?.gentle,
    age: user?.age,
    phone: user?.phone,
    email: user?.email,
    address: user?.address,
  });

  const { name, age, phone, email, address } = newUser;

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() !== false) {
      dispatch(updateUserAction({ id: user.id, user: newUser }));
    }
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  const handleUser = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setNewUser({
      name: user?.name,
      gentle: user?.gentle,
      age: user?.age,
      phone: user?.phone,
      email: user?.email,
      address: user?.address,
    });
  }, [user]);

  return (
    <Form style={{ width: "50%" }} onSubmit={handleSubmit} noValidate validated={validated}>
      <div>
        <img src={avatar} alt='avatar' style={{ width: "120px", height: "120px" }} />
      </div>
      <Form.Group controlId='formFile' className='mt-3'>
        <Form.Control type='file' />
        <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mt-3' controlId='name'>
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control
          required
          type='text'
          name='name'
          value={name}
          placeholder='Nhập Họ và tên'
          onChange={handleUser}
        />
        <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mt-3' controlId='age'>
        <Form.Label>Tuổi</Form.Label>
        <Form.Control
          required
          type='number'
          name='age'
          value={age}
          placeholder='Nhập Tuổi'
          onChange={handleUser}
        />
        <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mt-3' controlId='phone'>
        <Form.Label>Số điện thoại</Form.Label>
        <Form.Control
          required
          type='text'
          name='phone'
          value={phone}
          placeholder='Nhập Số điện thoại'
          onChange={handleUser}
        />
        <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mt-3' controlId='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type='text'
          name='email'
          value={email}
          placeholder='Nhập Email'
          onChange={handleUser}
        />
        <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mt-3' controlId='address'>
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control
          required
          type='text'
          name='address'
          value={address}
          placeholder='Nhập Địa chỉ'
          onChange={handleUser}
        />
        <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
      </Form.Group>
      {/* <div className='d-flex mt-3'>
        <div className='d-flex' style={{ width: "120px" }}>
          <label className='label d-flex align-items-center'>
            <input
              type='radio'
              name='gentle'
              checked={gentle === 1 ? true : false}
              onChange={handleUser}
              value={1}
            />
            <span className='checkmarkRadio'></span>
          </label>
          <div className='d-flex' style={{ lineHeight: "33px", marginLeft: "10px" }}>
            Nam
          </div>
        </div>
        <div className='d-flex' style={{ width: "120px" }}>
          <label className='label d-flex align-items-center'>
            <input
              type='radio'
              name='gentle'
              onChange={handleUser}
              value={0}
              checked={gentle === 0 ? true : false}
            />
            <span className='checkmarkRadio'></span>
          </label>
          <div className='d-flex' style={{ lineHeight: "33px", marginLeft: "10px" }}>
            Nữ
          </div>
        </div>
      </div> */}
      <Button variant='primary' type='submit' className='mt-3'>
        Cập nhật
      </Button>
    </Form>
  );
};

export default ProfileEdit;
