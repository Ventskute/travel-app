import React, { useState, useEffect } from "react";
import "./Weather.scss";

export default function Weather({ lang = "en", isoCode = "BY" }) {
  const [weatherData, setWeatherData] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`//localhost:3000/countries/${isoCode}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          return Promise.reject("404 Country not found");
        } else {
          return Promise.reject("Error: " + response.status);
        }
      })
      .catch((e) => console.error(e))
      .then((country) => {
        setCountry(country);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${country.capital.name}&lang=${lang}&appid=b230d199aa8e2ebca5c616c59bde9699&units=metric`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeatherData(result);
          });
      });
  }, []);

  return (
    <>
      {country ? <div className="city">{country.capital.name}</div> : ""}
      {weatherData ? (
        <>
          <i
            className={`weather-icon owf owf-${weatherData.weather[0].id} owf-3x`}
          ></i>
          <div className="temperature">
            {weatherData.main.temp.toFixed(0)}°C
          </div>
          <div className="weather-description">
            {weatherData.weather[0].description}
          </div>
          <div className="speed-wind"> {weatherData.wind.speed} m/s</div>
          <div className="air-humidity">{weatherData.main.humidity} % </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
