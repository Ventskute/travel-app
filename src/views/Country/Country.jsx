import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Map from '../../components/Map/Map';
import data from '../../components/Map/blr.json';

function Country() {
  return (
    <div className="Country">
      <Header />
      <h2>Country {countryName}</h2>
      <div className="Country-logo">
        <div className="Country-logo__card">
          <img className="card__image" src="./img/layout-country.jpeg" alt="layout-country"></img>
          <h2 className="card__title">Magical Paris</h2>
          <p className="card__subtitle">
            City of light, one of the most famous cities in the world is waiting to be explored.
            Some of the most famous museums, food and landmarks are waiting for you in Paris.
          </p>
        </div>
        <div className="Country-logo__widgets">
          <div className="widgets__current-wather">wather</div>
          <div className="widgets__current-rate">rate</div>
          <div className="widgets__current-time">time</div>
        </div>
      </div>
      <div className="Country-slider">
        <div className="Country-slider__buttons">
          <img className="slider-button__left" src="./img/arrow_left.png" alt="" />
          <img className="slider-right" src="./img/arrow_right.png" alt="" />
        </div>
        <div className="Country-slider__slides">
          <div
            className="Country-slider__slides_1st"
            style={{
              backgroundImage: `url("/dist/img/slider-img1.jpeg")`,
            }}></div>
          <img className="slider-button__left" src="./img/slider-img1.jpeg" alt="" />
          <img className="slider-right" src="./img/slider-img2.jpeg" alt="" />
          <img className="slider-right" src="./img/slider-img3.jpeg" alt="" />
        </div>
      </div>
      <Map data={data} />
      <Footer />
    </div>
  );
}

export default Country;
