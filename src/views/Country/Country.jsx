import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Country() {
  let { countryName } = useParams();

  return (
    <>
      <Header />
      <h2>Country {countryName}</h2>
      <Footer />
      
    </>
  );
}
