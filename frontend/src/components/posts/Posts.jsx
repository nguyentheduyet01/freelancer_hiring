import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../post/Post";
import { getAllPostAction } from "./../../reducer/actions/postAction";
import "./Posts.css";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { data } = posts;
  const handleClick = () => {
    dispatch(getAllPostAction({ pagesize: 5, pageindex: 1 }));
  };

  useEffect(() => {
    dispatch(getAllPostAction({ pagesize: 5, pageindex: 1 }));
  }, [dispatch]);
  return (
    <>
      {data?.length !== 0 &&
        data?.map((item, index) => {
          if (index === 0) {
            return <Post key={index} item={item} active='active' />;
          }
          return <Post key={index} item={item} />;
        })}
      <>
        <div className='mt-4 d-flex justify-content-center'>
          <button className='btnAdd' onClick={handleClick}>
            Xem thêm
          </button>
        </div>
      </>
    </>
  );
};

export default Posts;
