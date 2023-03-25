import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="wrapper">
        <div className="top">Find your Special Someone</div>
        <div className="bottom">
          <div className="items">
            <div className="item">
              <img src=".\src\assets\pexels-banu-film-ads-12432088.jpg" alt="" className="itemImg" />
              <p className="link">Sign Up</p>
              <p className="info">Register for free & put up your Matrimony Profile</p>
            </div>
            <div className="item">
              <img src=".\src\assets\pexels-banu-film-ads-12432088.jpg" alt="" className="itemImg" />
              <p className="link">Connect</p>
              <p className="info">Select & Connect with Matches you like</p>
            </div>
            <div className="item">
              <img src=".\src\assets\pexels-banu-film-ads-12432088.jpg" alt="" className="itemImg" />
              <p className="link">Interact</p>
              <p className="info">Become a Premium Member & Start a Conversation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
