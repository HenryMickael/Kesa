import React, { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={handleCollapse}>
        <h2>{title}</h2>
        <span className={`chevron ${isOpen ? "up" : "down"}`}>&#x25BC;</span>
      </div>
      <div className={`collapse-body ${isOpen ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
