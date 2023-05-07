import React from "react";
import { Card, Row } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import { Link } from "react-router-dom";

const Freelancer = () => {
  return (
    <div>
      <Row className='px-5 py-4 m-0 freelancerBox border'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex'>
            <img
              src={avatar}
              alt='avatar.png'
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
            <div
              className='d-flex flex-column justify-content-center'
              style={{ marginLeft: "10px", fontSize: "92%", fontWeight: "500" }}
            >
              <p style={{ margin: "0", lineHeight: "18px", color: "#4da817" }}>Nguyen the vu</p>
              <p style={{ margin: "0", lineHeight: "18px" }}>Mô tả</p>
              <p style={{ margin: "0", lineHeight: "20px", fontWeight: "400", color: "gray" }}>
                location
              </p>
            </div>
          </div>
          <div>
            <button
              className='btnSearch'
              style={{ width: "auto", height: "40px", borderRadius: "0" }}
            >
              Liên hệ trực tiếp
            </button>
          </div>
        </div>
        <div className='mt-3'>
          <Card.Text
            style={{
              color: "#001e00",
              height: "43px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero deleniti culpa
            repudiandae provident, exercitationem quam optio quis vero omnis. Obcaecati labore
            blanditiis repellat iure quos quae eligendi nemo eum debitis.
          </Card.Text>
          <div className='d-flex'>
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
      </Row>
      <Row className='px-5 py-4 m-0 freelancerBox border'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex'>
            <img
              src={avatar}
              alt='avatar.png'
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
            <div
              className='d-flex flex-column justify-content-center'
              style={{ marginLeft: "10px", fontSize: "92%", fontWeight: "500" }}
            >
              <p style={{ margin: "0", lineHeight: "18px", color: "#4da817" }}>Nguyen the vu</p>
              <p style={{ margin: "0", lineHeight: "18px" }}>Mô tả</p>
              <p style={{ margin: "0", lineHeight: "20px", fontWeight: "400", color: "gray" }}>
                location
              </p>
            </div>
          </div>
          <div>
            <button
              className='btnSearch'
              style={{ width: "auto", height: "40px", borderRadius: "0" }}
            >
              Liên hệ trực tiếp
            </button>
          </div>
        </div>
        <div className='mt-3'>
          <Card.Text
            style={{
              color: "#001e00",
              height: "43px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero deleniti culpa
            repudiandae provident, exercitationem quam optio quis vero omnis. Obcaecati labore
            blanditiis repellat iure quos quae eligendi nemo eum debitis.
          </Card.Text>
          <div className='d-flex'>
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
      </Row>
    </div>
  );
};

export default Freelancer;
