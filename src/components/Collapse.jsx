import React, { useState } from "react";
import "../style/Collapse.css";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={handleCollapse}>
        <h2>
          {title}
          <button className={`chevron ${isOpen ? "up" : "down"}`}>&lt;</button>
        </h2>
      </div>
      <div className={`collapse-body ${isOpen ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
