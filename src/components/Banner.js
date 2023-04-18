import React from "react";
import "../style/Banner.css";

const Banner = ({ imageUrl, text }) => {
  const bannerStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="banner" style={bannerStyle}>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
