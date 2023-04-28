import React, { useState } from "react";
import "../style/Slideshow.css";
import chevron from '../assets/Vector.png';

const Slideshow = ({slide}) => {
  const [imageAffiche, setimageAffiche] = useState(0);
  const length = slide.length;

  const handleNext = () => {
    setimageAffiche(imageAffiche === length - 1 ? 0 : imageAffiche + 1);
  };

  const handlePrev = () => {
    setimageAffiche(imageAffiche === 0 ? length - 1 : imageAffiche - 1);
  };

  if (length === 1) {
    return (
      <div className="carousel">
        <div className="slider">
          <img
            key={imageAffiche}
            src={slide[0]}
            alt={imageAffiche}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="carousel">
      <div className="slider">
        <img
          key={imageAffiche}
          src={slide[imageAffiche]}
          alt={imageAffiche}
        />
      <p className="count">
        {imageAffiche + 1}/{length}
      </p>
      <div className="contain_btn">
        <button onClick={handlePrev} className="prev-btn">
          <img src={chevron} alt="" />
        </button>
        <button onClick={handleNext} className="next-btn">
          <img src={chevron} alt="" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
