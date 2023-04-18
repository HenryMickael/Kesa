import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BackImg from "../assets/IMG.png";
import "../style/Home.css";

const text = "Chez vous, partout et ailleurs";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner imageUrl={BackImg} text={text} />
    </div>
  );
};

export default Home;
