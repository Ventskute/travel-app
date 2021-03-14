import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import data from '../../components/Map/blr.json';
import GeneralWidgetRate from '../../components/GeneralWidgetRate/GeneralWidgetRate';

export default function Country() {
  let { countryName } = useParams();

  return (
    <>
      <Header />
      <h2>Country {countryName}</h2>
      <Map data={data} />
      <Footer />
    </>
  );
}
