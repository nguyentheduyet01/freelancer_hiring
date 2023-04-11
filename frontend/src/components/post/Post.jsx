import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import formatVi from "../../utils/vi";
import "./Post.css";

const Post = () => {
  return (
    <div>
      <Link to='login' className='postLink'>
        <Card style={{ width: "70vw", margin: "0 auto", padding: "30px" }} className='cartPost'>
          <Card.Body>
            <Card.Title style={{ fontSize: "120%", lineHeight: "50px" }}>
              <Link to='' className='linkPost'>
                Lead generations expert
              </Link>
            </Card.Title>
            <Card.Subtitle
              className='mb-2 text-muted d-flex flex-row justify-content-between'
              style={{ fontSize: "100%" }}
            >
              <span>Fixed-price - Entry level - Est. Budget: $5</span>
              <span>Posted {formatVi("Tue Apr 11 2023 22:00:04", "locate")}</span>
            </Card.Subtitle>
            <Card.Text style={{ color: "black" }}>
              Hello, We are looking for a lead Generation Expert who have the access with the
              LinkedIn Sales navigator . We want IT Owners from the Uk. We want 100 leads for now.
              Data required: Name (Ceo) Website Company name LinkedIn Url Contact number Email.
              Apply with your best proposal for more information. Thanks
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
          </Card.Body>
        </Card>
      </Link>
      <Link to='login' className='postLink'>
        <Card style={{ width: "70vw", margin: "0 auto", padding: "30px" }} className='cartPost'>
          <Card.Body>
            <Card.Title style={{ fontSize: "120%", lineHeight: "50px" }}>
              <Link to='' className='linkPost'>
                Lead generations expert
              </Link>
            </Card.Title>
            <Card.Subtitle
              className='mb-2 text-muted d-flex flex-row justify-content-between'
              style={{ fontSize: "100%" }}
            >
              <span>Fixed-price - Entry level - Est. Budget: $5</span>
              <span>Posted {formatVi("Tue Apr 11 2023 22:00:04", "locate")}</span>
            </Card.Subtitle>
            <Card.Text style={{ color: "black" }}>
              Hello, We are looking for a lead Generation Expert who have the access with the
              LinkedIn Sales navigator . We want IT Owners from the Uk. We want 100 leads for now.
              Data required: Name (Ceo) Website Company name LinkedIn Url Contact number Email.
              Apply with your best proposal for more information. Thanks
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
          </Card.Body>
        </Card>
      </Link>
      <Link to='login' className='postLink'>
        <Card style={{ width: "70vw", margin: "0 auto", padding: "30px" }} className='cartPost'>
          <Card.Body>
            <Card.Title style={{ fontSize: "120%", lineHeight: "50px" }}>
              <Link to='' className='linkPost'>
                Lead generations expert
              </Link>
            </Card.Title>
            <Card.Subtitle
              className='mb-2 text-muted d-flex flex-row justify-content-between'
              style={{ fontSize: "100%" }}
            >
              <span>Fixed-price - Entry level - Est. Budget: $5</span>
              <span>Posted {formatVi("Tue Apr 11 2023 22:00:04", "locate")}</span>
            </Card.Subtitle>
            <Card.Text style={{ color: "black" }}>
              Hello, We are looking for a lead Generation Expert who have the access with the
              LinkedIn Sales navigator . We want IT Owners from the Uk. We want 100 leads for now.
              Data required: Name (Ceo) Website Company name LinkedIn Url Contact number Email.
              Apply with your best proposal for more information. Thanks
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
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Post;