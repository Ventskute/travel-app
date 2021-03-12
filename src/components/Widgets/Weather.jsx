import React, { useState, useEffect } from "react";
import "./Weather.scss";

export default function Weather({ cityName = "Minsk", lang = "en" }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${lang}&appid=b230d199aa8e2ebca5c616c59bde9699&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <>
      <div className="city" contentEditable="true">
        {cityName}
      </div>
      <i className="weather-icon owf"></i>
      {data ? (
        <>
          <div className="temperature">{data.main.temp.toFixed(0)}°C</div>
          <div className="weather-description">
            {data.weather[0].description}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
