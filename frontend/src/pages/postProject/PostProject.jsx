import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import icon6 from "../../images/icon6.png";

const PostProject = () => {
  return (
    <Container>
      <h4 style={{ textAlign: "center" }} className='mt-3 mb-3'>
        Đăng Tin
      </h4>
      <Row style={{ width: "60%", margin: "0 auto" }}>
        <Form>
          <div className='d-flex flex-row' style={{ width: "100%" }}>
            <div>
              <img src={icon1} alt='icon1' />
            </div>
            <div style={{ width: "80%", marginLeft: "30px" }}>
              <h5>Việc cần tuyển</h5>
              <Form.Group className='mb-3' controlId='lv'>
                <Form.Label>Chọn lĩnh vực cần tuyển</Form.Label>
                <Form.Select aria-label='Default select example'>
                  <option>- Tên Lĩnh Vực -</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='mb-3' controlId='dv'>
                <Form.Label>
                  Chọn dịch vụ phù hợp với yêu cầu tuyển freelancer của bạn nhất
                </Form.Label>
                <Form.Select aria-label='Default select example'>
                  <option>- Tên dịch vụ -</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Đặt tên cụ thể cho công việc cần tuyển</Form.Label>
                <Form.Control type='text' placeholder='VD: Thiết kế bán hàng' />
              </Form.Group>
            </div>
          </div>
          <div className='d-flex flex-row mt-3' style={{ width: "100%" }}>
            <div>
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
                  placeholder='Ví dụ: Các giao diện website cần thiết kế như trang chủ, xem hàng, thanh toán...'
                />
              </Form.Group>
              <div style={{ width: "60%" }}>
                <Form.Group className='mb-3' controlId='skill'>
                  <Form.Label>Kỹ năng yêu cầu freelancer phải có</Form.Label>
                  <Form.Control type='text' placeholder='VD: Thiết kế bán hàng' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='date'>
                  <Form.Label>Hạn cuối nhận chào giá của freelancer</Form.Label>
                  <Form.Control type='date' placeholder='VD: Thiết kế bán hàng' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='lh'>
                  <Form.Label>Loại hình làm việc</Form.Label>
                  <Form.Select aria-label='Default select example'>
                    <option value='parttime'>Việc làm bán thời gian</option>
                    <option value='fulltime'>Việc làm toàn thời gian</option>
                    <option value='project'>Việc làm theo dự án</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3' controlId='ht'>
                  <Form.Label>Hình thức làm việc</Form.Label>
                  <Form.Select aria-label='Default select example'>
                    <option value='online'>Làm online</option>
                    <option value='offline'>Làm tại văn phòng</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
          </div>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default PostProject;
