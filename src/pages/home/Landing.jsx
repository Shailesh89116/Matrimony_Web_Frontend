import React, { useState } from "react";
import Banner from "../../component/banner/Banner";
import Footer from "../../component/footer/Footer";
import GetStarted from "../../component/getStarted/GetStarted";
import Login from "../../component/login/Login";
import Navbar from "../../component/navbar/Navbar";
import Register from "../../component/register/Register";
import Slider from "../../component/slider/Slider";
import StroyBanner from "../../component/storyBanner/StroyBanner";

const Landing = () => {
  
  return (
    <>
      <Navbar/>
      <Slider />
      <Banner />
      <StroyBanner/>
      <GetStarted/>
      <Footer />
      <Login/>
      <Register/>
    </>
  );
};

export default Landing;
