import React from "react";
import { Link } from "react-router-dom/dist";
import img from "../assets/logo_c.png";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar_top">
      <img src={img} alt="logo kesa" />
      <nav className="Navlink">
        <Link to="/">Acceuil</Link>
        <Link to="/About">A propos</Link>
      </nav>
    </div>
  );
};

export default Navbar;
