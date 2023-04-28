import React from "react";

import Banner from "../components/Banner";
import BackImg from "../assets/IMG.png";
import Footer from "../components/Footer";
import Carda from "../components/Carda";

const text = "Chez vous, partout et ailleurs";

const Home = () => {
  return (
    <div className="home">
      <Banner imageUrl={BackImg} text={text} />
      <Carda></Carda>
      <Footer />
    </div>
  );
};

export default Home;
