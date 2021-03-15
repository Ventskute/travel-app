import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Swiper from '../../components/Swiper/Swiper';
import CountryPromo from '../../components/CountryPromo/CountryPromo';

import data from '../../components/Map/blr.json';

import './Country.scss';

function Country() {
  const [countryState, setCountryState] = React.useState(null);
  const backEndPath = 'localhost:3000';
  let { countryName } = useParams();
  console.log(countryState);
  React.useEffect(() => {
    fetch(`http://${backEndPath}/countries/CAN`)
      .then((res) => res.json())
      .then((data) => setCountryState(data));
  }, []);

  return (
    <div className="country">
      <Header />
      <h2>Country {countryName}</h2>
      {countryState && (
        <React.Fragment>
          <section className="country-promo">
            <CountryPromo countryState={countryState} />
          </section>

          <section className="country-slider">
            <div className="wrapper country-slider__wrapper">
              <Swiper countryState={countryState} />
            </div>
          </section>
          <Map data={data} />
        </React.Fragment>
      )}
      <Footer />
    </div>
  );
}

export default Country;
