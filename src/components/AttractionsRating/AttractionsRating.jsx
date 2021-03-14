import React from 'react';
import './AttractionsRating.scss';

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
          key={index}></div>
      ))}
    </div>
  );
}

export default AttractionsRating;
