import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import MetaData from "../../components/metadata/MetaData";
import CapacityProfile from "./../../components/profile/CapacityProfile";
import ProfileEdit from "./../../components/profile/ProfileEdit";
import WorkProfile from "./../../components/profile/WorkProfile";

const UpdateProfile = () => {
  const location = useLocation();
  const [site, setSite] = useState({});

  let ht = location.pathname.split("/")[3] || "info";

  useEffect(() => {
    if (ht === "work_profile") {
      setSite({ context: <WorkProfile /> });
    } else if (ht === "capacity_profile") {
      setSite({ context: <CapacityProfile /> });
    } else {
      setSite({ context: <ProfileEdit /> });
    }
  }, [ht]);

  const items = [
    {
      value: "info",
      context: "Thông tin cá nhân",
      link: "",
    },
    {
      value: "work_profile",
      context: "Hồ sơ làm việc",
      link: "work_profile",
    },
    {
      value: "capacity_profile",
      context: "Hồ sơ năng lực",
      link: "capacity_profile",
    },
  ];

  return (
    <div>
      <MetaData title='Update Profile' />
      <Container className='border rounded-4 mt-5'>
        <Row>
          <Col>
            <div className='header-profile mt-3'>
              {items &&
                items.map((item, index) => {
                  let active = "";
                  if (ht === item.value) {
                    active = "active";
                  }
                  return (
                    <div className={`header-item ${active}`} key={index}>
                      <Link to={item.link} style={{ textDecoration: "none", color: "#3399cc" }}>
                        {item.context}
                      </Link>
                    </div>
                  );
                })}
            </div>
            <hr />
            <div className='mt-4' style={{ padding: "10px 43px" }}>
              {site.context}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateProfile;
