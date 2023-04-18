import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erreur from "../pages/Erreur";
import Home from "../pages/Home";
import About from "../pages/About";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Erreur />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
