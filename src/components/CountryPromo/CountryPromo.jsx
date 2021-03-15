import React from 'react';
import Widgets from '../Widgets/Widgets';
import './CountryPromo.scss';

function CountryPromo({ countryState }) {
  console.log(countryState)
  const {name, descriprion, image, capital} = countryState;

  return  (
    <div className="wrapper country-promo__wrapper">
      <div className="country-promo__card">
        <img className="card__image" src={image} alt="layout-country"></img>
        <h2 className="card__title">{`${name} ${capital.name}`}</h2>
        <p className="card__subtitle">
          {descriprion}
        </p>
      </div>
      <Widgets countryState={countryState}/>
    </div>
  );
}

export default CountryPromo;
