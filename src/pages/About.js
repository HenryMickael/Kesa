import React from "react";
import Banner from "../components/Banner";
import image2 from "../assets/IMGB.png";
import "../style/About.css";
import aboutData from "../aboutData";

const About = () => {
  return (
    <div className="about">
      <Banner imageUrl={image2} />
      <div className="about_Collaps">
        <h2>Fiabilité</h2>
        <p>{aboutData.fiabilite}</p>
        <h2>Respect</h2>
        <p>{aboutData.respect}</p>
        <h2>Service</h2>
        <p>{aboutData.service}</p>
        <h2>Sécurité</h2>
        <p>{aboutData.securite}</p>
      </div>
    </div>
  );
};

export default About;
