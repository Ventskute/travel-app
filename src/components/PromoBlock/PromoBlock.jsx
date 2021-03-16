import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PromoBlock.scss";

export default function PromoBlock() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch("//localhost:3000/countries/countryoftheday")
      .then((response) => {
        return response.json();
      })
      .catch((e) => console.error(e))
      .then((country) => {
        setCountry(country);
      });
  }, []);

  return (
    <>
      <div className="promo">
        <div className="title">
          <p>
            Country of the day:
            {country ? <Link to={`/${country.name}`}>{country.name}</Link> : ""}
          </p>
        </div>
      </div>
    </>
  );
}
