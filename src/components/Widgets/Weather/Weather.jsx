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
      <h3 className="weather-widget__title">{dict.WEATHER} {city}</h3>
      {weatherData &&
        <p className="weather-widget__content">
          <i className={`weather-icon owf owf-${weatherData.weather[0].id} owf-3x`}></i>
          <div className="temperature">
            {dict.TEMPERATURE}: {weatherData.main.temp.toFixed(0)}°C
          </div>
          <div className="weather-description">{dict.WEATHER_TYPE}: {weatherData.weather[0].description}</div>
          <div className="speed-wind">
            {dict.WIND_SPEED}: {weatherData.wind.speed} {dict.WIND_SPEED_VAL}
          </div>
          <div className="air-humidity">{dict.HUMIDITY}: {weatherData.main.humidity}% </div>
        </p>
      }
    </div>
  );
}
