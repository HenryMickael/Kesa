import React from "react";
import Banner from "../components/Banner";
import image2 from "../assets/IMGB.png";
import "../style/About.css";
import aboutData from "../aboutData";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div className="about">
      <Banner imageUrl={image2} />
      <div className="about_Collaps">
        <Collapse title="Fiabilité">{aboutData.fiabilite}</Collapse>
        <Collapse title="Respect">{aboutData.respect}</Collapse>
        <Collapse title="Service">{aboutData.service}</Collapse>
        <Collapse title="Sécurité">{aboutData.securite}</Collapse>
      </div>
    </div>
  );
};

export default About;
