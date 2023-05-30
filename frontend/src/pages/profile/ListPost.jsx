import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ListPosts from "../../components/listApply/ListPosts";
import MetaData from "../../components/metadata/MetaData";
import ListApply from "../../components/listApply/ListApply";

const ListPost = () => {
  const location = useLocation();
  const [site, setSite] = useState({});

  let ht = location.pathname.split("/")[2] || "post";

  const items = [
    {
      value: "post",
      context: "Danh sách bài đăng",
      link: "",
    },
    {
      value: "applied",
      context: "Danh sách ứng tuyển",
      link: "/myposts/applied",
    },
  ];

  return (
    <Container className='mt-5'>
      <MetaData title='My Posts' />
      <Row style={{ backgroundColor: "rgb(233, 229, 229)" }}>
        <div className='header d-flex'>
          {items.map((item, index) => {
            if (ht === item.value) {
              return (
                <div className='active' key={index}>
                  <Link style={{ color: "black", textDecoration: "none" }} to={item.link}>
                    {item.context}
                  </Link>
                </div>
              );
            }
            return (
              <div>
                <Link style={{ color: "black", textDecoration: "none" }} to={item.link} key={index}>
                  {item.context}
                </Link>
              </div>
            );
          })}
        </div>
      </Row>
      <Row>{ht === "post" ? <ListPosts /> : <ListApply />}</Row>
    </Container>
  );
};

export default ListPost;
