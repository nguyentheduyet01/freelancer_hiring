import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import MetaData from "../../components/metadata/MetaData";
import avatar from "../../images/avatar.png";
import budgeting from "../../images/budgeting.png";
import calendar from "../../images/calendar.png";
import hourglass from "../../images/hourglass.png";
import placeholder from "../../images/placeholder.png";
import wage from "../../images/wage.png";
import working from "../../images/working.png";
import { applyAction, getPostAction } from "../../reducer/actions/postAction";
import { clearMessage } from "../../reducer/slice/postSlice";
import paragraphFormat from "../../utils/paragraphFormat";
import { showToastMessageSuccess } from "../../utils/toastify";
import formatVi from "../../utils/vi";
import formatVND from "./../../utils/formatVND";
import "./PostDetail.css";
import { uploadACtion } from "../../reducer/actions/userAction";
import axios from "../../utils/instance";

const PostDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const { post, applySuccess } = useSelector((state) => state.post);
  const { isLoad } = useSelector((state) => state.post);
  const [file, setFile] = useState();
  const [validated, setValidated] = useState(false);

  const [apply, setApply] = useState({
    userId: user?.id,
    postId: post?.id,
    intendTime: "1 Ngày",
  });

  const id = location.pathname.split("/")[2];
  let day = null;

  if (post?.expired) {
    const start = new Date();
    const end = new Date(post?.expired);
    const duration = end - start;
    day = Math.ceil(duration / (1000 * 60 * 60 * 24));
  }

  const handleApply = (e) => {
    setApply({
      ...apply,
      userId: user?.id,
      postId: post?.id,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() !== false) {
      let cvId;
      if (file) {
        const myForm = new FormData();

        myForm.set("UserId", user?.id);
        myForm.set("title", "title");
        myForm.set("type", 2);
        myForm.set("files", file);
        const { data } = await axios.post("filedatas/upload", myForm, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        cvId = data?.split("_")[0];
      }
      dispatch(applyAction({ apply, cvId }));
    }
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  const handleUpload = (e) => {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (applySuccess === true) {
      showToastMessageSuccess("Ứng tuyển thành công");
    }

    dispatch(clearMessage());
    dispatch(getPostAction(id));
  }, [dispatch, id, applySuccess]);

  return (
    <>
      <MetaData title='Post' />
      {isLoad ? (
        <Loader />
      ) : (
        <Container className='mt-3'>
          <Row style={{ width: "90%", margin: "0 auto" }}>
            <div className='mt-3 border rounded-4 p-3 mt-3 mb-3'>
              <h4>{post?.title}</h4>
              <div className='' style={{ fontSize: "90%", fontWeight: "700" }}>
                <div className='d-flex mt-3' style={{ width: "20%" }}>
                  <img
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                    src={avatar}
                    alt='user'
                  />
                  <div style={{ marginLeft: "20px" }}>
                    Người đăng
                    <div className='infoProject'>
                      <Link to={`/freelancer/${user?.id}`}>{post?.name}</Link>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-between' style={{ width: "60%" }}>
                  <div>
                    <div className='d-flex mt-3'>
                      <img
                        style={{ width: "32px", height: "32px" }}
                        src={calendar}
                        alt='calendar'
                      />
                      <div style={{ marginLeft: "20px" }}>
                        Đã đăng
                        <div className='infoProject'>{formatVi(post?.createdAt)}</div>
                      </div>
                    </div>
                    <div className='d-flex mt-3'>
                      <img
                        style={{ width: "32px", height: "32px" }}
                        src={hourglass}
                        alt='hourglass'
                      />
                      <div style={{ marginLeft: "20px" }}>
                        Chỉ còn
                        <div className='infoProject'>{`${
                          day > 0 ? `${day} ngày` : "Hết hạn"
                        }`}</div>
                      </div>
                    </div>
                    <div className='d-flex mt-3'>
                      <img
                        style={{ width: "32px", height: "32px" }}
                        src={placeholder}
                        alt='placeholder'
                      />
                      <div style={{ marginLeft: "20px" }}>
                        {" "}
                        Địa điểm <div className='infoProject'>{post?.address}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='d-flex mt-3'>
                      <img
                        style={{ width: "32px", height: "32px" }}
                        src={budgeting}
                        alt='budgeting'
                      />
                      <div style={{ marginLeft: "20px" }}>
                        Ngân sách <div className='infoProject'>{formatVND(post?.budget)}</div>
                      </div>
                    </div>
                    <div className='d-flex mt-3'>
                      <img style={{ width: "32px", height: "32px" }} src={working} alt='working' />
                      <div style={{ marginLeft: "20px" }}>
                        Hình thức làm việc{" "}
                        <div className='infoProject'>{`${
                          post?.workingMethod === 1 ? "Làm online" : "Làm tại văn phòng"
                        }`}</div>
                      </div>
                    </div>
                    <div className='d-flex mt-3'>
                      <img style={{ width: "32px", height: "32px" }} src={wage} alt='wage' />
                      <div style={{ marginLeft: "20px" }}>
                        Hình thức trả lương{" "}
                        <div className='infoProject'>{`${
                          post?.paymentMethod === 1
                            ? "Trả theo dự án"
                            : post?.paymentMethod === 2
                            ? "Trả theo giờ"
                            : "Trả theo tháng"
                        }`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border rounded-4 p-3 mt-3 mb-3'>
              <h5>Chi tiết</h5>
              {paragraphFormat(post?.descriptions)}
              <div className='d-flex mt-1'>
                <button className='skillButton'>
                  <Link className='linkSkill' to=''>
                    Nodejs
                  </Link>
                </button>
                <button className='skillButton'>
                  <Link className='linkSkill'>javascript</Link>
                </button>
                <button className='skillButton'>
                  <Link className='linkSkill'>Express</Link>
                </button>
                <button className='skillButton'>
                  <Link className='linkSkill'>ReactJs</Link>
                </button>
              </div>
            </div>
            <div className='border rounded-4 p-3 mt-3 mb-3'>
              <h5>Yêu cầu</h5>
              {paragraphFormat(post?.requirement)}
            </div>
            <div className='border rounded-4 p-3 mt-3'>
              <h5>Thông tin chào giá</h5>
              <hr />
              <Form onSubmit={handleSubmit} noValidate validated={validated}>
                <Row>
                  <Col xm='4' lg='4'>
                    <Form.Group className='mb-3' controlId='cp'>
                      <Form.Label>
                        <h6 className=''>Đề xuất chi phí</h6>
                      </Form.Label>
                      <Form.Control
                        required
                        type='number'
                        placeholder='2.000.000VNĐ'
                        name='salary'
                        onChange={handleApply}
                      />
                      <Form.Control.Feedback type='invalid'>
                        Vui lòng nhập trường này
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='dk'>
                      <Form.Label>
                        <h6 className=''>Dự kiến hoàn thành trong bao lâu</h6>
                      </Form.Label>
                      <Form.Select
                        aria-label='Default select example'
                        name='intendTime'
                        required
                        onChange={handleApply}
                      >
                        <option value='1 Ngày'>1 Ngày</option>
                        <option value='2 Ngày'>2 Ngày</option>
                        <option value='3 Ngày'>3 Ngày</option>
                        <option value='5 Ngày'>5 Ngày</option>
                        <option value='7 Ngày'>7 Ngày</option>
                        <option value='10 Ngày'>10 Ngày</option>
                        <option value='2 Tuần'>2 Tuần</option>
                        <option value='3 Tuần'>3 Tuần</option>
                        <option value='4 Tuần'>4 Tuần</option>
                        <option value='6 Tuần'>6 Tuần</option>
                      </Form.Select>
                      <Form.Control.Feedback type='invalid'>
                        Vui lòng nhập trường này
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col xm='1' lg='1' className='p-0'></Col>
                  <Col>
                    <Form.Group className='mb-3' controlId=''>
                      <Form.Label>
                        <h6>Đề xuất thuyết phục khách hàng</h6>
                      </Form.Label>
                      <Form.Control
                        required
                        as='textarea'
                        rows={5}
                        placeholder='- Tôi đã có XX năm kinh nghiệm trong lĩnh vực'
                        onChange={handleApply}
                        name='suggestion'
                      />
                      <Form.Control.Feedback type='invalid'>
                        Vui lòng nhập trường này
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                      <Form.Label style={{ color: "#0093be", fontSize: "90%", cursor: "pointer" }}>
                        Thêm tài liệu đính kèm
                      </Form.Label>
                      <div style={{ fontSize: "80%" }}>
                        Định dạng được hỗ trợ: png, jpg, gif, pdf, psd, xls, xlsx, doc, docx, ppt,
                        pptx, ods, odt, zip, rar <br />
                        Dung lượng tối đa: 10MB <br />
                        Kích thước tối đa: 3000x3000 px <br />
                        <Form.Control type='file' onChange={handleUpload} name='' />
                      </div>
                      <Form.Control.Feedback type='invalid'>
                        Vui lòng nhập trường này
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                      variant='warning'
                      type='submit'
                      style={{ width: "100%" }}
                      disabled={day > 0 ? false : true}
                    >
                      Gửi chào giá
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Row>
        </Container>
      )}
    </>
  );
};

export default PostDetail;
