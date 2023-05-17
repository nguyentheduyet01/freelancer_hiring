import React from "react";
import { useSelector } from "react-redux";
import DetailQuotes from "../../components/detailQuotes/DetailQuotes";
import Slider from "../../components/slider/Slider";
import Posts from "./../../components/posts/Posts";

const Home = () => {
  return (
    <>
      {
        <>
          <title>Home</title>
          <Slider />
          <h2 className='mt-3 mb-3 text-center'>CÁC CÔNG VIỆC ĐƯỢC QUAN TÂM NHẤT</h2>
          <div style={{ width: "70vw", margin: "0 auto" }}>
            <Posts />
          </div>
          <DetailQuotes />
        </>
      }
    </>
  );
};

export default Home;
