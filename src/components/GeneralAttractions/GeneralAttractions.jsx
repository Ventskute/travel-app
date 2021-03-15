import React from 'react';
import AttractionsRating from '../AttractionsRating/AttractionsRating';
import Swiper from '../Swiper/Swiper';

function GeneralAttractions({ countryState }) {
    const [currentImage, setCurrentImage] = React.useState(0);
  return (
    <div className="attractions">
      <AttractionsRating currentImage={currentImage} countryState={countryState} />
      <section className="country-slider">
        <div className="wrapper country-slider__wrapper">
          <Swiper countryState={countryState} setCurrentImage={setCurrentImage} />
        </div>
      </section>
    </div>
  );
}

export default GeneralAttractions;
