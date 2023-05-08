import React from "react";
import { useParams } from "react-router-dom";
import chambres from "../Fetch.json";
import "../style/Tag.css";

const Tag = () => {
  const { chambreid } = useParams();
  const chambre = chambres.find((chambre) => chambre.id === chambreid);
  const tags = chambre.tags;

  return (
    <div className="tag_multi">
      {tags.map((tag) => (
        <p key={tag} className="tag_solo">
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tag;
