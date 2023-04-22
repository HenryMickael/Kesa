import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erreur from "../pages/Erreur";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "./Navbar";
import Appartement from "../pages/Appartement";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Erreur />} />
        <Route path="/About" element={<About />} />
        <Route path="/chambres/:chambreid" element={<Appartement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
