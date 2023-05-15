import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

const WorkProfile = () => {
  const [validated, setValidated] = useState(false);
  const [selections, setSelections] = useState([]);

  const options = [];

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() !== false) {
      // const user = {
      //   ...newUser,
      // };
      // dispatch(updateUserAction(user.id, user));
    }
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <Form style={{ width: "50%" }} onSubmit={handleSubmit} noValidate validated={validated}>
      <Form.Group className='mt-3' controlId='name'>
        <Form.Label>Chức danh</Form.Label>
        <Form.Control
          required
          type='text'
          name='introduce'
          // value={name}
          placeholder='Giới thiệu ngắn gọn'
          // onChange={handleUser}
        />
        <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mt-3' controlId='decription'>
        <Form.Label>Giới thiệu bản thân</Form.Label>
        <Form.Control
          required
          as='textarea'
          rows={6}
          name='decription'
          // value={age}
          placeholder='Giới thiệu bản thân'
          // onChange={handleUser}
        />
        <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId='httl'>
        <Form.Label>Trình độ</Form.Label>
        <Form.Select
          aria-label='Default select example'
          name='paymentMethod'
          // onChange={handleCreatePost}
        >
          <option value='1'>Mới đi làm</option>
          <option value='2'>Đã có kinh nghiệm</option>
          <option value='3'>Đi làm lâu năm</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Single Selection</Form.Label>
        <Typeahead
          id='basic-typeahead-single'
          allowNew
          labelKey='name'
          multiple
          onChange={handleChange}
          options={[]}
          placeholder='Choose a state...'
          selected={selections}
        />
      </Form.Group>

      <Button variant='primary' type='submit' className='mt-3'>
        Cập nhật
      </Button>
    </Form>
  );
};

export default WorkProfile;
