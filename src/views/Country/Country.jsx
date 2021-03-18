import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import CountryPromo from "../../components/CountryPromo/CountryPromo";
import GeneralAttractions from "../../components/GeneralAttractions/GeneralAttractions";
import YouTubeVideo from "../../components/Video/YouTubeVideo";

import data from "../../components/Map/blr.json";

import "./Country.scss";
import { getCountry } from "../../utils/api";
import { useSelector } from "react-redux";

function Country() {
  const { locale } = useSelector((state) => state);
  const [countryState, setCountryState] = React.useState(null);

  let { ISOCode } = useParams();

  React.useEffect(() => {
    getCountry(locale, ISOCode).then((res) => setCountryState(res));
  }, []);

  return (
    <div className="country">
      <Header />
      {countryState && (
        <React.Fragment>
          <CountryPromo countryState={countryState} />
          <section className="attractions">
            <GeneralAttractions countryState={countryState} />
          </section>
          <Map data={data} />
          <section className="video">
            <div
              className="video-wrapper container"
              style={{ backgroundImage: `url(${countryState.promo})` }}
            >
              <h2 className="video__title">{countryState.name}</h2>
              <YouTubeVideo videoId={countryState.videoUrl} />
            </div>
          </section>
        </React.Fragment>
      )}
      <Footer />
    </div>
  );
}

export default Country;
