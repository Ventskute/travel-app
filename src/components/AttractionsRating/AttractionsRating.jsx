import React from 'react';
import './AttractionsRating.scss';

import starSelected from '../../assets/img/star-selected.png';
import starDesabled from '../../assets/img/star.png';

function AttractionsRating() {
  const [ratingState, setRatingState] = React.useState(['-', '-', '-', '-', '-']);
  const ratingArray = ['-', '-', '-', '-', '-'];

  const getRating = (index) => {
    ratingArray.map((el, i) => {
      i <= index ? (ratingArray[i] = '+') : '-';
    });
    setRatingState(ratingArray);
  };
  return (
    <div className={`attractions-rating`}>
      {ratingState.map((el, index) => (
        <div
          onClick={() => getRating(index)}
          className={`attractions-rating__point attractions-rating__point_${
            el === '-' ? 'selected' : 'disabled'
          }`}
          key={`${index}_${el}`}
          style={
            el === '-'
              ? { backgroundImage: `url(${starDesabled})` }
              : { backgroundImage: `url(${starSelected})` }
          }></div>
      ))}
    </div>
  );
}

export default AttractionsRating;
