import React from 'react';
import { YMaps, Map, FullscreenControl, GeoObject } from 'react-yandex-maps';

const defaultValue = {
  center: [55.75, 37.57],
  capital: 'Moscow',
  zoom: 9
}

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
        <Map defaultState={defaultValue}>
          <FullscreenControl onClick={toggleFullScreen}/>
          <GeoObject
            geometry={{
              type: 'Point',
              coordinates: defaultValue.center
            }}
            properties={{
              iconContent: defaultValue.capital,
            }}
            options={{
              preset: 'islands#blackStretchyIcon'
            }}
          />
        </Map>
      </div>
    </YMaps>
  )
};