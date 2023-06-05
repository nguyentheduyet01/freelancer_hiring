import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uploadACtion } from "../../reducer/actions/userAction";
import { showToastMessageError, showToastMessageSuccess } from "./../../utils/toastify";
import { clearMessage } from "../../reducer/slice/userSlice";

const CapacityProfile = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [profile, setProfile] = useState({ type: "2" });
  const [file, setFile] = useState();
  const { user, uploadStatus } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const myForm = new FormData();

      myForm.set("UserId", user?.id);
      myForm.set("title", profile.title);
      myForm.set("type", profile.type);
      myForm.set("files", file);

      dispatch(uploadACtion(myForm));
    }

    setValidated(true);
  };
  const handleUpload = (e) => {
    const reader = new FileReader();

    // reader.onload = () => {
    //   if (reader.readyState === 2) {
    //     setAvatarPreview(reader.result);
    //   }
    // };

    reader.readAsDataURL(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const handleProfile = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (uploadStatus === true) {
      showToastMessageSuccess("Lưu Hồ sơ thành công");
    }
    if (uploadStatus === false) {
      showToastMessageError("Lưu Hồ sơ Thất bại");
    }
    dispatch(clearMessage());
  }, [uploadStatus, dispatch]);
  return (
    <div>
      <h5>Thêm Hồ sơ năng lực</h5>
      <Form style={{ width: "50%" }} onSubmit={handleSubmit} noValidate validated={validated}>
        <Form.Group className='mt-3' controlId='title'>
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            required
            type='text'
            name='title'
            // value={name}
            placeholder='Nhập Tiêu đề'
            onChange={handleProfile}
          />
          <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='formFile' className='mt-3'>
          <Form.Label>File đính kèm</Form.Label>
          <Form.Control type='file' name='files' onChange={handleUpload} />
          <Form.Control.Feedback type='invalid'>Vui lòng nhập trường này</Form.Control.Feedback>
          <div style={{ fontSize: "70%", color: "gray" }}>
            1. Kích thước không quá 5 MB
            <br />
            2. Định dạng được hỗ trợ
            <br />- Về tài liệu: .doc, .docx, .pdf,
            <br />- Về hình ảnh: .jpg, .jpeg, .png, .gif
            <br />
            3. Nếu là ảnh:
            <br />- Kích thước tối thiểu là 380 x 214
            <br />- Kích thước tối đa là 1600 x 900
          </div>
        </Form.Group>
        <Button variant='primary' type='submit' className='mt-3'>
          Lưu Hồ sơ
        </Button>
      </Form>
    </div>
  );
};

export default CapacityProfile;
