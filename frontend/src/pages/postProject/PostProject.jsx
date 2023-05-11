import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import icon1 from "../../images/headhunting.png";
import icon2 from "../../images/file.png";
import icon3 from "../../images/requirements.png";
import icon4 from "../../images/financial.png";
import "./postProject.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../reducer/actions/categoryAction";
import { createPostAction } from "../../reducer/actions/postAction";

// #044B04
const PostProject = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    linkApply: "null",
    status: 1,
  });
  const { categories } = useSelector((state) => state.category);
  const { account } = useSelector((state) => state.account);
  let ht = location.search.split("=")[1];
  // if (ht == "") {
  //   ht = "fulltime";
  // }

  const hts = [
    {
      type: "pasttime",
      value: 1,
      context: "Việc làm bán thời gian",
    },
    {
      type: "fulltime",
      value: 2,
      context: "Việc làm toàn thời gian",
    },
    {
      type: "project",
      value: 3,
      context: "Việc làm theo dự án",
    },
  ];

  const handleCreatePost = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (account === "") {
      navigate("/login?post");
    }
    e.preventDefault();
    // const myForm = new FormData();
    // myForm.set("createdBy", account.data.id);
    // myForm.set("linkApply", "null");
    // myForm.set("descriptions", post.descriptions);
    // myForm.set("title", post.title);
    // myForm.set("requirement", post.requirement);
    // myForm.set("budget", Number(post.budget));
    // myForm.set("paymentMethod", Number(post.paymentMethod));
    // myForm.set("expired", post.expired);
    // myForm.set("workingMethod", Number(post.workingMethod));
    // myForm.set("address", post.address);
    // myForm.set("status", 1);

    const newPost = {
      ...post,
      createdBy: account.data.id,
    };

    dispatch(createPostAction(newPost));
    alert("Đăng bài thành công");
    // navi
  };

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  return (
    <Container className='border project p-4' style={{ width: "900px", margin: "0 auto" }}>
      <h4 style={{ textAlign: "center" }} className='mt-3 mb-3'>
        Đăng Tin
      </h4>

      <Row style={{ width: "80%", margin: "0 auto" }}>
        <Form onSubmit={handleSubmit}>
          <div className='d-flex flex-row' style={{ width: "100%" }}>
            <div className='iconPost'>
              <img src={icon1} alt='icon1' />
            </div>
            <div style={{ width: "80%", marginLeft: "30px" }}>
              <h5>Việc cần tuyển</h5>
              <Form.Group className='mb-3' controlId='lv'>
                <Form.Label>Chọn lĩnh vực cần tuyển</Form.Label>
                <Form.Select
                  aria-label='Default select example'
                  onChange={handleCreatePost}
                  name='categoryId'
                >
                  <option value='null'>- Tên Lĩnh Vực -</option>
                  {categories &&
                    categories.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
              {/* <Form.Group className='mb-3' controlId='dv'>
                <Form.Label>
                  Chọn dịch vụ phù hợp với yêu cầu tuyển freelancer của bạn nhất
                </Form.Label>
                <Form.Select aria-label='Default select example'>
                  <option>- Tên dịch vụ -</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </Form.Select>
              </Form.Group> */}
              <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Đặt tên cụ thể cho công việc cần tuyển</Form.Label>
                <Form.Control
                  type='text'
                  name='title'
                  placeholder='VD: Thiết kế bán hàng'
                  onChange={handleCreatePost}
                />
              </Form.Group>
            </div>
          </div>
          <div className='d-flex flex-row mt-3' style={{ width: "100%" }}>
            <div className='iconPost'>
              <img src={icon2} alt='icon1' />
            </div>
            <div style={{ width: "80%", marginLeft: "30px" }}>
              <h5>Thông tin đầy đủ về yêu cầu tuyển dụng</h5>
              <Form.Group className='mb-3' controlId='lv'>
                <Form.Label>
                  Nội dung chi tiết, và các đầu việc cần Freelancer thực hiện (càng chi tiết,
                  freelancer càng có đầy đủ thông tin để gửi báo giá chính xác hơn).
                </Form.Label>
                <Form.Control
                  as='textarea'
                  rows={4}
                  name='descriptions'
                  onChange={handleCreatePost}
                  placeholder='Ví dụ: Các giao diện website cần thiết kế như trang chủ, xem hàng, thanh toán...'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='skill'>
                <Form.Label>Kỹ năng yêu cầu freelancer phải có</Form.Label>
                <Form.Control
                  as='textarea'
                  type='text'
                  row={2}
                  name='requirement'
                  onChange={handleCreatePost}
                  placeholder='VD: Thiết kế bán hàng'
                />
              </Form.Group>
              <div style={{ width: "80%" }}>
                <Form.Group className='mb-3' controlId='date'>
                  <Form.Label>Hạn cuối nhận chào giá của freelancer</Form.Label>
                  <Form.Control
                    type='date'
                    name='expired'
                    onChange={handleCreatePost}
                    placeholder='VD: Thiết kế bán hàng'
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='lh'>
                  <Form.Label>Loại hình làm việc</Form.Label>
                  <Form.Select
                    aria-label='Default select example'
                    name='workingMethod'
                    onChange={handleCreatePost}
                  >
                    {hts.map((item, index) => {
                      if (item.type === ht) {
                        return (
                          <option key={index} selected value='1'>
                            {item.context}
                          </option>
                        );
                      }
                      return (
                        <option key={index} value='1'>
                          {item.context}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                {/* <Form.Group className='mb-3' controlId='ht'>
                  <Form.Label>Hình thức làm việc</Form.Label>
                  <Form.Select aria-label='Default select example'>
                    <option value='online'>Làm online</option>
                    <option value='offline'>Làm tại văn phòng</option>
                  </Form.Select>
                </Form.Group> */}
              </div>
            </div>
          </div>
          <div className='d-flex flex-row mt-3' style={{ width: "100%" }}>
            <div className='iconPost'>
              <img src={icon3} alt='icon1' />
            </div>
            <div style={{ width: "80%", marginLeft: "30px" }}>
              <h5>Yêu cầu khác với freelancer</h5>
              <div style={{ width: "60%" }}>
                <Form.Group className='mb-3' controlId='nct'>
                  <Form.Label>Cần tuyển freelancer làm việc tại</Form.Label>
                  <Form.Control
                    type='text'
                    name='address'
                    onChange={handleCreatePost}
                    placeholder='Hà Nội'
                  />
                  {/* <Form.Select aria-label='Default select example'>
                    <option value=''>- Nơi cần tuyển -</option>
                  </Form.Select> */}
                </Form.Group>
              </div>
            </div>
          </div>
          <div className='d-flex flex-row mt-3' style={{ width: "100%" }}>
            <div className='iconPost'>
              <img src={icon4} alt='icon1' />
            </div>
            <div style={{ width: "80%", marginLeft: "30px" }}>
              <h5>Ngân sách dự kiến chi cho công việc này</h5>
              <div>
                <Form.Group className='mb-3' controlId='httl' style={{ width: "60%" }}>
                  <Form.Label>Hình thức trả lương</Form.Label>
                  <Form.Select
                    aria-label='Default select example'
                    name='paymentMethod'
                    onChange={handleCreatePost}
                  >
                    <option value='1'>Trả theo dự án</option>
                    <option value='2'>Trả theo giờ</option>
                    <option value='3'>Trả theo tháng</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Số tiền tối đa có thể trả</Form.Label>
                  <div className='d-flex justify-content-between'>
                    <Form.Control
                      type='number'
                      aria-label='Default select example'
                      style={{ width: "60%" }}
                      placeholder='Khoảng'
                      name='budget'
                      onChange={handleCreatePost}
                    ></Form.Control>
                    {/* <Form.Control
                      type='number'
                      aria-label='Default select example'
                      style={{ width: "49%" }}
                      placeholder='Đến'
                    ></Form.Control> */}
                  </div>
                </Form.Group>
              </div>
            </div>
          </div>
          <Form.Group>
            <div style={{ width: "20%" }}></div>
            <Button
              variant='warning'
              type='submit'
              style={{ width: "80%", marginLeft: "111px", fontWeight: "500" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
};

export default PostProject;
