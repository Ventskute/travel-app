import React from 'react';
import './AttractionsRating.scss';

import starSelected from '../../assets/img/star-selected.png';
import starDesabled from '../../assets/img/star.png';

function AttractionsRating() {
  const [rating, setRating] = React.useState(0);
  const rateArr = Array(5).fill(null);

  const getRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div className={`attractions-rating`}>
      {rateArr.map((el, index) => (
        <div
          className={`attractions-rating__point attractions-rating__point_${
            index >= rating ? 'disabled' : 'selected'
          }`}
          onClick={() => getRating(index)}
          style={
            index >= rating
              ? { backgroundImage: `url(${starDesabled})` }
              : { backgroundImage: `url(${starSelected})` }
          }
          key={index}>
          {el}
        </div>
      ))}
    </div>
  );
}

export default AttractionsRating;
