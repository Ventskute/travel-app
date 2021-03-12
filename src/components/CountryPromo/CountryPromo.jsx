import React from 'react';
import  {Widgets}  from '../';
import layoutCountry from '../../assets/img/layout-country.jpeg';
import './CountryPromo.scss';

function CountryPromo() {
  return (
    <div className="wrapper country-promo__wrapper">
      <div className="country-promo__card">
        <img className="card__image" src={layoutCountry} alt="layout-country"></img>
        <h2 className="card__title">Magical Paris</h2>
        <p className="card__subtitle">
          City of light, one of the most famous cities in the world is waiting to be explored. Some
          of the most famous museums, food and landmarks are waiting for you in Paris.
        </p>
      </div>
      <Widgets />
    </div>
  );
}

export default CountryPromo;
