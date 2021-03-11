import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Map from '../../components/Map/Map';
import data from '../../components/Map/blr.json';
import './Country.scss'
import { Swiper, CountryPromo } from '../../components/Country-components';
import mapImg from '../../assets/img/map.jpeg'
import playerBackImg from '../../assets/img/player-background.jpeg'
import playerImg from '../../assets/img/player.jpeg'

function Country() {
  return (
    <div className="country">
      <Header />
      <h2>Country {countryName}</h2>
      <section className="country-promo">
        <CountryPromo />
      </section>
      <section className="country-slider">
        <div className="wrapper country-slider__wrapper">
          <Swiper />
          {/*<img className="slider-button slider-button__left" src="./img/arrow_left.png" alt="" />

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
          <img className="slider-button slider-button__right" src="./img/arrow_right.png" alt="" />*/}
        </div>
      </section>
      <section className="country-map">
        {/* <Map /> */}
        <div className="wrapper country-map__wrapper">
          <img className="country-map__map" src={mapImg} alt="" />
        </div>
      </section>
      <section className="country-video-block">
        {/* <VideoPlayer /> */}
        <div className="wrapper country-video-block__wrapper" style={{
            backgroundImage: `url(${playerBackImg})`,
          }}>
            <div className="country-video-block__title">See Dubai from the sky</div>
            <div class="video-player">
              <img src={playerImg} alt="" />
            </div>
          </div>
      </section>
      <Map data={data} />
      <Footer />
    </div>
  );
}

export default Country;
