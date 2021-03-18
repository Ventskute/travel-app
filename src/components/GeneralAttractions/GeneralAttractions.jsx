import React from 'react';
import AttractionsRating from '../AttractionsRating/AttractionsRating';
import Swiper from '../Swiper/Swiper';

import './GeneralAttractions.scss';

function GeneralAttractions({ countryState }) {
  const [currentImage, setCurrentImage] = React.useState(0);
  return (
    <div className="attractions">
      <div className="attractions-info">
        <div className="container attractions-info__wrapper">
          <AttractionsRating currentImage={currentImage} countryState={countryState} />
        </div>
      </div>
      <div className="country-slider">
        <div className="wrapper country-slider__wrapper">
          <Swiper countryState={countryState} setCurrentImage={setCurrentImage} />
        </div>
      </div>
    </div>
  );
}

export default GeneralAttractions;
