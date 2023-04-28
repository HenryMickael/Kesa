import React from "react";
import { NavLink } from "react-router-dom/dist";
import imgN from "../assets/logo_c.png";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar_top">
      <NavLink to="/">
        <img src={imgN} alt="logo kesa" />
      </NavLink>
      <nav className="Navlink">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Acceuil
        </NavLink>
        <NavLink
          to="/About"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          A propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
