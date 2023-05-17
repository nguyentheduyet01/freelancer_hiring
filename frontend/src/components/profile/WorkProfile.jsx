import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch, useSelector } from "react-redux";
import { getAllSkillAction } from "./../../reducer/actions/skillAction";
import { updateUserAction } from "../../reducer/actions/userAction";
import { showToastMessageSuccess } from "../../utils/toastify";
import { clearMessage } from "../../reducer/slice/userSlice";
import Loader from "../Loader/Loader";

const WorkProfile = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [selections, setSelections] = useState([]);

  const [newUser, setNewUser] = useState({
    decription: "",
    experince: "",
  });

  const { skills } = useSelector((state) => state.skill);
  const { user, updateSuccess, isLoad } = useSelector((state) => state.user);
  const { decription, experince } = newUser;

  const options = skills.map((skill) => skill.name);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    console.log(newUser);
    e.preventDefault();

    if (form.checkValidity() !== false) {
      dispatch(updateUserAction({ id: user.id, user: newUser }));
    }
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };
  const handleChange = (e) => {
    setSelections(e);
  };

  const handleUpdate = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const exp = [
    {
      value: "1",
      context: "Mới đi làm",
    },
    {
      value: "2",
      context: "Đã có kinh nghiệm",
    },
    {
      value: "3",
      context: "Đi làm lâu năm",
    },
  ];

  useEffect(() => {
    if (updateSuccess === true) {
      showToastMessageSuccess("Cập nhật thành công");
    }

    dispatch(clearMessage());
    setNewUser({
      decription: user?.decription,
      experince: user?.experince,
    });
    dispatch(getAllSkillAction());
  }, [dispatch, user, updateSuccess]);

  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <Form style={{ width: "50%" }} onSubmit={handleSubmit} noValidate validated={validated}>
          {/* <Form.Group className='mt-3' controlId='name'>
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
      </Form.Group> */}
          <Form.Group className='mt-3' controlId='decription'>
            <Form.Label>Giới thiệu bản thân</Form.Label>
            <Form.Control
              required
              as='textarea'
              rows={6}
              name='decription'
              value={decription}
              placeholder='Giới thiệu bản thân'
              onChange={handleUpdate}
            />
            <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='httl'>
            <Form.Label>Trình độ</Form.Label>
            <Form.Select
              aria-label='Default select example'
              name='experince'
              onChange={handleUpdate}
            >
              {exp.map((e, index) => {
                if (e.value === experince) {
                  return (
                    <option selected value={e.value} key={index}>
                      {e.context}
                    </option>
                  );
                }
                return (
                  <option key={index} value={e.value}>
                    {e.context}
                  </option>
                );
              })}
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
              options={options}
              placeholder='Choose a state...'
              selected={selections}
            />
          </Form.Group>

          <Button variant='primary' type='submit' className='mt-3'>
            Cập nhật
          </Button>
        </Form>
      )}
    </>
  );
};

export default WorkProfile;
