import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryOfTheDay } from "../../utils/api";
import "./PromoBlock.scss";

export default function PromoBlock() {
  const [country, setCountry] = useState(null);
  const { dict } = useSelector(state => state);

  useEffect(() => {
    getCountryOfTheDay()
      .then((country) => {
        setCountry(country);
      });
  }, []);

  return (
    <>
      <Link className="promo-link" to={`/${country && country.name}`}>
        <div className="promo">
          <div className="container">
            <h2 className="title">
                {dict.COUNTRY_OF_THE_DAY}
                {country && country.name}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
}
