import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import formatVi from "../../utils/vi";
import "./Post.css";
import formatVND from "../../utils/formatVND";

const Post = ({ item, active }) => {
  // 'cartPost'
  return (
    <div>
      <Card
        style={{ padding: "30px" }}
        className={`${active === "active" ? "cartPost active" : "cartPost"}`}
      >
        <Link to={`posts/${item?.id}`} className='postLink'>
          <Card.Body>
            <Card.Title style={{ fontSize: "120%", lineHeight: "50px" }}>
              <Link to='' className='linkPost'>
                {item?.title}
              </Link>
            </Card.Title>
            <Card.Subtitle
              className='mb-2 text-muted d-flex flex-row justify-content-between'
              style={{ fontSize: "100%" }}
            >
              <span>Ngân sách: {formatVND(item?.budget)}</span>
              <span>Đã đăng {formatVi(item?.createdBy)}</span>
            </Card.Subtitle>
            <Card.Text
              style={{
                color: "black",
                height: "43px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {item?.descriptions}
            </Card.Text>
            <Link>Xem thêm</Link>

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
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default Post;
