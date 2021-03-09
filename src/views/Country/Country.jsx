import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Map from '../../components/Map/Map';
import data from '../../components/Map/blr.json';
import './Country.scss'
import Swiper from '../../components/Swiper/Swiper';
import CountryPromo from '../../components/CountryPromo/CountryPromo';
import mapImg from '../../assets/img/map.jpeg'
import playerBackImg from '../../assets/img/player-background.jpeg'
import playerImg from '../../assets/img/player.jpeg'

function Country() {
  let { countryName } = useParams();

  return (
    <div className="country">
      <Header />
      <h2>Country {countryName}</h2>
      <div className="country">
        <section className="country-promo">
          <CountryPromo />
        </section>
        <section className="country-slider">
          <div className="wrapper country-slider__wrapper">
            <Swiper />
          </div>
        </section>
        <Map data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default Country;
