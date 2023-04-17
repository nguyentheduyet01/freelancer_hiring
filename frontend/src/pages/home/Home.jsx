import React from "react";
import Post from "../../components/post/Post";
import Slider from "../../components/slider/Slider";
import DetailQuotes from "../../components/detailQuotes/DetailQuotes";

const Home = () => {
  return (
    <>
      <Slider />
      <h2 className='mt-3 mb-3 text-center'>CÁC CÔNG VIỆC ĐƯỢC QUAN TÂM NHẤT</h2>
      <Post />
      <DetailQuotes />
    </>
  );
};

export default Home;