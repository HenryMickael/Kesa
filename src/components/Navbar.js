import React from "react";
import { Link } from "react-router-dom/dist";
import img from "../assets/logo_c.png";

const Navbar = () => {
  return (
    <div className="Navbar_top">
      <img src={img} alt="logo kesa" />
      <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/About">A propos</Link>
      </nav>
    </div>
  );
};

export default Navbar;
