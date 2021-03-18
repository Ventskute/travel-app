import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Weather.scss';

export default function Weather({ city }) {
  const { locale, dict } = useSelector(state => state);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${locale}&appid=b230d199aa8e2ebca5c616c59bde9699&units=metric`,
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
      });
  }, []);

  return (
    <div className="widget weather-widget">
      <h3 className="weather-widget__title">{dict.WEATHER}</h3>
      <h3 className="city">{city}</h3>
      {weatherData &&
        <h4 className="weather-widget__content">
          <i className={`weather-icon owf owf-${weatherData.weather[0].id} owf-3x`}></i>
          <div className="temperature">{weatherData.main.temp.toFixed(0)}°C</div>
          <div className="weather-description">{weatherData.weather[0].description}</div>
          <div className="speed-wind"> {weatherData.wind.speed} m/s</div>
          <div className="air-humidity">{weatherData.main.humidity} % </div>
          </h4>
      }
    </div>
  );
}
