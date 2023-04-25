import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import formatVi from "../../utils/vi";
import "./PostDetail.css";
import user from "../../images/user.png";
import calendar from "../../images/calendar.png";
import hourglass from "../../images/hourglass.png";
import placeholder from "../../images/placeholder.png";
import budgeting from "../../images/budgeting.png";
import working from "../../images/working.png";
import wage from "../../images/wage.png";

const PostDetail = () => {
  return (
    <Container className='mt-3'>
      <Row style={{ width: "90%", margin: "0 auto" }}>
        <div className='mt-3 border rounded-4 p-3 mt-3 mb-3'>
          <h4>Lead generations expertLead generations expertLead</h4>
          <div className='' style={{ fontSize: "90%", fontWeight: "700" }}>
            <div className='d-flex mt-3' style={{ width: "20%" }}>
              <img style={{ width: "32px", height: "32px" }} src={user} alt='user' />
              <div style={{ marginLeft: "20px" }}>
                Người đăng
                <div className='infoProject'>
                  <Link>the duyet</Link>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between' style={{ width: "60%" }}>
              <div>
                <div className='d-flex mt-3'>
                  <img style={{ width: "32px", height: "32px" }} src={calendar} alt='calendar' />
                  <div style={{ marginLeft: "20px" }}>
                    Đã đăng
                    <div className='infoProject'>{formatVi("Tue Apr 18 2023 20:00:04")}</div>
                  </div>
                </div>
                <div className='d-flex mt-3'>
                  <img style={{ width: "32px", height: "32px" }} src={hourglass} alt='hourglass' />
                  <div style={{ marginLeft: "20px" }}>
                    {" "}
                    Chỉ còn
                    <div className='infoProject'>{formatVi("Tue Apr 18 2023 20:00:04")}</div>
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
                    Địa điểm <div className='infoProject'>Hà Nội</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='d-flex mt-3'>
                  <img style={{ width: "32px", height: "32px" }} src={budgeting} alt='budgeting' />
                  <div style={{ marginLeft: "20px" }}>
                    Ngân sách <div className='infoProject'>12.000.000VNĐ - 15.000.000VNĐ</div>
                  </div>
                </div>
                <div className='d-flex mt-3'>
                  <img style={{ width: "32px", height: "32px" }} src={working} alt='working' />
                  <div style={{ marginLeft: "20px" }}>
                    Hình thức làm việc <div className='infoProject'>Làm online</div>
                  </div>
                </div>
                <div className='d-flex mt-3'>
                  <img style={{ width: "32px", height: "32px" }} src={wage} alt='wage' />
                  <div style={{ marginLeft: "20px" }}>
                    Hình thức trả lương <div className='infoProject'>Trả lương theo dự án</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border rounded-4 p-3 mt-3 mb-3'>
          <h5>Chi tiết</h5>
          Hello, We are looking for a lead Generation Expert who have the access with the LinkedIn
          Sales navigator . We want IT Owners from the Uk. We want 100 leads for now. Data required:
          Name (Ceo) Website Company name LinkedIn Url Contact number Email. Apply with your best
          proposal for more information. Thanks
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
              <Link className='linkSkill'>Nodejs</Link>
            </button>
            <button className='skillButton'>
              <Link className='linkSkill'>Nodejs</Link>
            </button>
          </div>
        </div>
        <div className='border rounded-4 p-3 mt-3 mb-3'>
          <h5>Yêu cầu</h5>
          - Nam/ nữ 20 tuổi trở lên. <br />
          - Không yêu cầu kinh nghiệm, được cầm tay chỉ việc, hỗ trợ trực tiếp 1-1 với Trưởng phòng
          kinh doanh. <br />
          - Có laptop và phương tiện đi lại.
          <br />
          - Nhanh nhẹn, có tinh thần học hỏi, cầu tiến. <br />
          - Có kỹ năng giao tiếp, đàm phán.
          <br />
        </div>
        <div className='border rounded-4 p-3 mt-3'>
          <h5>Thông tin chào giá</h5>
          <hr />
          <Form>
            <Row>
              <Col xm='4' lg='4'>
                <Form.Group className='mb-3' controlId='cp'>
                  <Form.Label>
                    <h6 className=''>Đề xuất chi phí</h6>
                  </Form.Label>
                  <Form.Control type='number' placeholder='2.000.000VNĐ' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='dk'>
                  <Form.Label>
                    <h6 className=''>Dự kiến hoàn thành trong bao lâu</h6>
                  </Form.Label>
                  <Form.Select aria-label='Default select example'>
                    <option value='1d'>1 Ngày</option>
                    <option value='2d'>2 Ngày</option>
                    <option value='3d'>3 Ngày</option>
                    <option value='5d'>5 Ngày</option>
                    <option value='7d'>7 Ngày</option>
                    <option value='10d'>10 Ngày</option>
                    <option value='2w'>2 Tuần</option>
                    <option value='3w'>3 Tuần</option>
                    <option value='4w'>4 Tuần</option>
                    <option value='6w'>6 Tuần</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xm='1' lg='1' className='p-0'></Col>
              <Col>
                <Form.Group className='mb-3' controlId=''>
                  <Form.Label>
                    <h6>Đề xuất thuyết phục khách hàng</h6>
                  </Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={5}
                    placeholder='- Tôi đã có XX năm kinh nghiệm trong lĩnh vực'
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label style={{ color: "#0093be", fontSize: "90%", cursor: "pointer" }}>
                    Thêm tài liệu đính kèm
                  </Form.Label>
                  <div style={{ fontSize: "80%" }}>
                    Định dạng được hỗ trợ: png, jpg, gif, pdf, psd, xls, xlsx, doc, docx, ppt, pptx,
                    ods, odt, zip, rar <br />
                    Dung lượng tối đa: 10MB <br />
                    Kích thước tối đa: 3000x3000 px <br />
                    <Form.Control type='file' />
                  </div>
                </Form.Group>
                <Button variant='warning' type='submit' style={{ width: "100%" }}>
                  Gửi chào giá
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default PostDetail;
