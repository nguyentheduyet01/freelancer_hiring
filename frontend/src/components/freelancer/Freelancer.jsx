import React from "react";
import { Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import Loader from "../Loader/Loader";
import MetaData from "../metadata/MetaData";
import SkillFreelancer from "./SkillFreelancer";
import { Link } from "react-router-dom";

const Freelancer = () => {
  const { users, isLoad } = useSelector((state) => state.user);
  return (
    <>
      <MetaData title='FreelancerSearch' />
      {isLoad ? (
        <Loader />
      ) : (
        <div>
          {users?.data?.length !== 0 &&
            users?.data?.map((user, index) => (
              <Row className='px-5 py-4 m-0 freelancerBox border' key={index}>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <Link to={`/freelancer/${user?.id}`}>
                      <img
                        src={avatar}
                        alt='avatar.png'
                        style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                      />
                    </Link>
                    <div
                      className='d-flex flex-column justify-content-center'
                      style={{ marginLeft: "10px", fontSize: "92%", fontWeight: "500" }}
                    >
                      <p style={{ margin: "0", lineHeight: "18px", color: "#4da817" }}>
                        {user?.name}
                      </p>
                      <p style={{ margin: "0", lineHeight: "18px" }}>{user?.introduce}</p>
                      <p
                        style={{
                          margin: "0",
                          lineHeight: "20px",
                          fontWeight: "400",
                          color: "gray",
                        }}
                      >
                        {user?.address}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Link to={`/freelancer/${user?.id}`}>
                      <button
                        className='btnSearch'
                        style={{ width: "auto", height: "40px", borderRadius: "0" }}
                      >
                        Liên hệ trực tiếp
                      </button>
                    </Link>
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
                    {user?.decription}
                  </Card.Text>
                  <SkillFreelancer skills={user?.skills} />
                </div>
              </Row>
            ))}
        </div>
      )}
    </>
  );
};

export default Freelancer;
