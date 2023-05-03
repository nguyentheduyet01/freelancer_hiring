import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "./../../reducer/actions/postAction";
import Post from "../post/Post";
const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getAllPostAction());
  }, [dispatch]);
  return (
    <>
      {posts.length !== 0 &&
        posts.map((item, index) => {
          if (index === 0) {
            return <Post key={index} item={item} active='active' />;
          }
          return <Post key={index} item={item} />;
        })}
    </>
  );
};

export default Posts;
