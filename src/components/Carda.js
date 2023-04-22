import React from "react";
import { Link } from "react-router-dom";
import chambres from "../Fetch.json";
import "../style/Card.css";

const Carda = () => {
  return (
    <section className="card_All">
      {chambres.map((chambre) => {
        return (
          <div key={chambre.id} className="card_Chambre">
            <Link to={`/chambres/${chambre.id}`}>
              <div className="card">
                <img src={chambre.cover} alt="" />
                <h2>{chambre.title}</h2>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Carda;
