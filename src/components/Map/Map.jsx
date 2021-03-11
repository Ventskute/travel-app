import React from 'react';
import { YMaps, Map, FullscreenControl, GeoObject, Polygon } from 'react-yandex-maps';
import data from './blr.json';

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

export default function CountryMap() {
  return (
    <YMaps>
      <div>
        My awesome application with maps!
        <Map defaultState={data}>
          <FullscreenControl onClick={toggleFullScreen}/>
          <GeoObject
            geometry={{
              type: 'Point',
              coordinates: data.center
            }}
            properties={{
              iconContent: data.capital,
            }}
            options={{
              preset: 'islands#blackStretchyIcon'
            }}
          />
          <GeoObject
           geometry={data.geometry}
          options={{
            fillColor: '#00FF0000',
            strokeColor: '#0000FF',
            strokeWidth: 5
          }}/>
        </Map>
      </div>
    </YMaps>
  )
};