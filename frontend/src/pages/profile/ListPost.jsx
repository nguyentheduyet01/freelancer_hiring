import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListPosts from "../../components/listApply/ListPosts";
import MetaData from "../../components/metadata/MetaData";

const ListPost = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Container className='mt-5'>
      <MetaData title='My Posts' />
      <Row>
        <div className='header d-flex'>
          <div>
            <Link to='/myposts'>Danh sách bài đăng</Link>
          </div>
          <div>
            <Link> Danh sách ứng tuyển</Link>
          </div>
        </div>
      </Row>
      <Row>{isShow ? "" : <ListPosts />}</Row>
    </Container>
  );
};

export default ListPost;
