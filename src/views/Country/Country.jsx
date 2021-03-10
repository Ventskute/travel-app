import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Map from '../../components/Map/Map';
import data from '../../components/Map/blr.json';
import './Country.scss'

function Country() {
  return (
    <div className="country">
      <Header />
      <h2>Country {countryName}</h2>
      <section className="country-promo">
        <div className="wrapper country-promo__wrapper">
          <div className="country-promo__card">
            <img className="card__image" src="./img/layout-country.jpeg" alt="layout-country"></img>
            <h2 className="card__title">Magical Paris</h2>
            <p className="card__subtitle">
              City of light, one of the most famous cities in the world is waiting to be explored.
              Some of the most famous museums, food and landmarks are waiting for you in Paris.
            </p>
          </div>
          <div className="country-promo__widgets">
            <div className="widgets__current-wather">wather</div>
            <div className="widgets__current-rate">rate</div>
            <div className="widgets__current-time">time</div>
          </div>
        </div>
      </section>
      <section className="country-slider">
        <div className="wrapper country-slider__wrapper">
          <img className="slider-button slider-button__left" src="./img/arrow_left.png" alt="" />

          <div className="country-slider__slides">
            <div
              className="country-slider__slides_1st slide"
              style={{
                backgroundImage: `url("./img/slider-img1.jpeg")`,
              }}>
              <div className="raiting-block">
                <div className="raiting-block__stars">
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star">
                    <img src="./img/star.png" alt="" />
                  </div>
                </div>
                <div className="raiting-block__voted-quantity">126 voted</div>
              </div>
              <h2 className="slide__title">Sea Voyages</h2>
            </div>
            <div
              className="country-slider__slides_2nd slide"
              style={{
                backgroundImage: `url("./img/slider-img2.jpeg")`,
              }}>
              <div className="raiting-block">
                <div className="raiting-block__stars">
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star">
                    <img src="./img/star.png" alt="" />
                  </div>
                </div>
                <div className="raiting-block__voted-quantity">96 voted</div>
              </div>
              <h2 className="slide__title">Mountain Clibs</h2>
            </div>
            <div
              className="country-slider__slides_3d slide"
              style={{
                backgroundImage: `url("./img/slider-img3.jpeg")`,
              }}>
              <div className="raiting-block">
                <div className="raiting-block__stars">
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star star-selected">
                    <img src="./img/star-selected.png" alt="" />
                  </div>
                  <div className="star">
                    <img src="./img/star.png" alt="" />
                  </div>
                </div>
                <div className="raiting-block__voted-quantity">250 voted</div>
              </div>
              <h2 className="slide__title">Quad Rides</h2>
            </div>
          </div>
          <img className="slider-button slider-button__right" src="./img/arrow_right.png" alt="" />
        </div>
      </section>
      <section className="country-map">
        <div className="wrapper country-map__wrapper">
          <img className="country-map__map" src="./img/map.jpeg" alt="" />
        </div>
      </section>
      <section
        className="country-video-block"
        >
        <div className="wrapper country-video-block__wrapper" style={{
          backgroundImage: `url("./img/player-background.jpeg")`,
        }}>
          <div className="country-video-block__title">See Dubai from the sky</div>
          <div class="video-player">
            <img src="./img/player.jpeg" alt="" />
          </div>
        </div>
      </section>
      <Map data={data} />
      <Footer />
    </div>
  );
}

export default Country;
