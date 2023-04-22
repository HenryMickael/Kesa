import React from "react";
import { Link } from "react-router-dom";
import "../style/Erreur.css";

const Erreur = () => {
  return (
    <div className="Error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  );
};

export default Erreur;
