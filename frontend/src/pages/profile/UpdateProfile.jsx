import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const UpdateProfile = () => {
  const location = useLocation();
  const [site, setSite] = useState("info");

  let ht = location.pathname.split("/")[3] || "info";

  const handleChangeSite = (site) => {
    setSite(site);
  };

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
      <Container className='border rounded-4 mt-5'>
        <div className='header-profile mt-3'>
          {items &&
            items.map((item, index) => {
              let active = "";
              if (ht === item.value) {
                active = "active";
              }
              return (
                <div className={`header-item ${active}`} key={index}>
                  <Link
                    onChange={handleChangeSite(item.value)}
                    to={item.link}
                    style={{ textDecoration: "none", color: "#3399cc" }}
                  >
                    {item.context}
                  </Link>
                </div>
              );
            })}
        </div>
        <div></div>
      </Container>
    </div>
  );
};

export default UpdateProfile;
