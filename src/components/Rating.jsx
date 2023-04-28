import React from 'react';
import greyStar from '../assets/starGrey.png'
import pinkStar from '../assets/starPink.png'
import '../style/Rating.css'




const Rating = ({rating}) => {
    const rateStars = [1,2,3,4,5]
    return (
        <div className="rating">

        {rateStars.map((star) =>
          rating >= star ? (
            <img
              key={star.toString()}
              className="rating_star"
              src={pinkStar}
              alt=""
            />
          ) : (
            <img
              key={star.toString()}
              className="rating_star"
              src={greyStar}
              alt=""
            />
          )
        )}
      </div>
    );
};

export default Rating;