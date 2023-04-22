import React from "react";
import imgF from "../assets/logo_b.png";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={imgF} alt="logo kesa blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
