import React from 'react';

import { YMaps, Map, FullscreenControl, GeoObject, Panorama, TypeSelector } from 'react-yandex-maps';

import './Map.scss';

import data from './blr.json';

export default function CountryMap() {
  return (
    <YMaps
      query={{
        lang: 'en_US',
        coordorder: 'longlat',
        apikey: "6a7ecd4e-5dac-4c29-8e69-110f766bb06c"
      }}
    >
      <Map
        width='100%'
        height='100%'
        className='map'
        defaultState={data}
        defaultOptions={{
          autoFitToViewport: 'always',
          exitFullscreenByEsc: true,
          nativeFullscreen: true,
        }}
      >
        <FullscreenControl/>
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
            fillColor: '#FF000011',
            strokeColor: '#FF0000',
            strokeWidth: 5
          }}
        />
        <TypeSelector />
      </Map>
    </YMaps>
  )
};
