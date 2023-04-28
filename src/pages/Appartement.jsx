import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import chambres from "../Fetch.json";
import Erreur from "./Erreur";
import Collapse from "../components/Collapse";
import "../style/Appartement.css"
import Tag from "../components/Tag";

const Appartement = () => {
  const { chambreid } = useParams();
  const chambre = chambres.find((chambre) => chambre.id === chambreid);
  if (!chambre) {
    return (
      <div>
        <Erreur />
      </div>
    );
  }
  const { title, location, description, equipments, rating, host } =
    chambre;
  return (
    <div className="appartement_full">
      <Slideshow />
      <div className="appartement_info">
        <div className="appart_title">
          <h2>{title}</h2>
          <p className="location">{location}</p>
          <Tag/>
        </div>
        <div className="info_host">
          <p>{host.name}</p>
          <img src={host.picture} alt="" />
          <p>{rating}</p>
        </div>
      </div>
      <Collapse title="Description">{description}</Collapse>
      <Collapse title="Equipements">
        {equipments.map((equipment) => (
          <p key={equipment}>{equipment}</p>
        ))}
      </Collapse>
    </div>
  );
};

export default Appartement;
