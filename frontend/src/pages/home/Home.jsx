import React from "react";
import Slider from "../../components/slider/Slider";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Slider />
      <div>
        <h5>{/* <Link p/> */}</h5>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
