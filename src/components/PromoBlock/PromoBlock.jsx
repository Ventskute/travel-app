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
      <Link className="promo-link" to={`/${country && country.name}`}>
        <div className="promo">
          <div className="container">
            <h2 className="title">
                {"Country of the day — "}
                {country && country.name}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
}
