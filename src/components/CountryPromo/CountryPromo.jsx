import React from 'react';
import Widgets from '../Widgets/Widgets';
import './CountryPromo.scss';
import img from '../../assets/img/player-background.jpeg'

function CountryPromo({ countryState }) {
  console.log(countryState)
  const {name, descriprion, image, capital} = countryState;

  return  (
    <div className="container country-promo__wrapper" style={{backgroundImage: `url(${img}`}}>
      <div className="country-promo__card">
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
