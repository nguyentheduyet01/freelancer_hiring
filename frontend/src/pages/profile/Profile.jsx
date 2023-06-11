import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import MetaData from "../../components/metadata/MetaData";
import Notification from "../../components/setting/Notification";
import avatar from "../../images/avatar.png";
import email from "../../images/email.png";
import pen from "../../images/pen.png";
import phone from "../../images/phone-call.png";
import placeholder from "../../images/placeholder.png";
import doc from "../../images/doc.png";

import {
  getAllSkillUserAction,
  getCVUserAction,
  getUserAction,
} from "../../reducer/actions/userAction";
import { clearMessage } from "../../reducer/slice/userSlice";
import { showToastMessageSuccess } from "../../utils/toastify";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({ status: "" });
  const { user, skills, isLoad, updateSuccess, statusChange, cvs } = useSelector(
    (state) => state.user,
  );
  const pathImage = user?.images?.length > 0 ? user?.images[0] : avatar;
  const date = new Date();
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

  const downloadCv = async (id) => {
    const link = document.createElement("a");
    link.href = `http://localhost:8080/api/filedatas/${id}`;

    const clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true,
    });

    link.dispatchEvent(clickEvent);
  };

  useEffect(() => {
    if (updateSuccess === true || statusChange === true) {
      showToastMessageSuccess("Cập nhật thành công");
      dispatch(clearMessage());
      dispatch(getUserAction(user?.id));
    }
    dispatch(getAllSkillUserAction(user?.id));
    dispatch(getCVUserAction(user?.id));
  }, [dispatch, user, updateSuccess, statusChange]);
  return (
    <>
      <MetaData title='Profile' />
      {isLoad ? (
        <Loader />
      ) : (
        <Container>
          <Row className='border p-3 rounded-4 mt-5'>
            <Col className='d-flex'>
              <div
                className='p-2 d-flex flex-column justify-content-center'
                style={{ width: "20%" }}
              >
                <img
                  src={pathImage}
                  alt='avatar'
                  style={{ width: "100%" }}
                  className='rounded-circle'
                />
              </div>
              <div className='d-flex flex-column justify-content-center'>
                <div className='d-flex'>
                  <h4>{user?.name}</h4>
                  <Link to='update'>
                    <p className='penCircle'>
                      <img src={pen} alt='pen' style={{ width: "20px" }} />
                    </p>
                  </Link>
                </div>
                <div>
                  <img src={placeholder} alt='placeholder' style={{ width: "25px" }} />
                  <span style={{ color: "gray" }}>
                    {user?.address} - {date.toLocaleString()}
                  </span>
                </div>
                <div className='mt-3'>
                  <div className='d-flex'>
                    {skills?.length !== 0 &&
                      skills?.map((skill, index) => (
                        <button className='skillButton' key={index}>
                          <Link className='linkSkill'>{skill?.skill?.name}</Link>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </Col>
            <Col className='d-flex justify-content-center'>
              <div className='information border px-5 py-4' style={{ width: "75%" }}>
                <div>
                  <h4>Thông tin liên lạc</h4>
                  <div>
                    <div>
                      <img src={email} alt='email' />
                      <span style={{ marginLeft: "10px" }}>{user?.email}</span>
                    </div>
                    <div>
                      <img src={phone} alt='phone' />
                      <span style={{ marginLeft: "10px" }}>{user?.phone}</span>
                    </div>
                  </div>
                </div>
                <Notification status={status} setStatus={setStatus} />
              </div>
            </Col>
          </Row>
          <Row className='border p-3 rounded-4 mt-5'>
            <div>
              <div>
                <h5>Giới thiệu</h5>
                <p>{user?.decription}</p>
              </div>
              <div>
                <h5>Làm việc</h5>
                {exp.map((e, index) => {
                  if (e.value === user?.experince) {
                    return <p>{e.context}</p>;
                  }
                })}
              </div>
            </div>
            <div></div>
          </Row>
          <Row className='border p-3 rounded-4 mt-5'>
            <div>
              <div>
                <h5>Hồ sơ năng lực</h5>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                  {cvs?.data?.length !== 0 &&
                    cvs?.data?.map((item, index) => (
                      <div key={index} className='cvItem mt-4'>
                        <button
                          className='skillButton'
                          key={index}
                          style={{
                            padding: "10px 3px 0px 3px",
                          }}
                        >
                          <p
                            className='linkSkill'
                            onClick={() => {
                              downloadCv(item?.id);
                            }}
                          >
                            {item?.title}
                          </p>
                        </button>
                        {/* <img
                          src={doc}
                          alt='cvs'
                          style={{ width: "100px", height: "100px" }}
                          onClick={() => {
                            downloadCv(item?.id);
                          }}
                        /> */}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div></div>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Profile;
