import React from 'react';

import { YMaps, Map as YMap, FullscreenControl, GeoObject, TypeSelector, Placemark, Polygon } from 'react-yandex-maps';

import './Map.scss';

export default function Map(props) {
  const { data } = props;

  return (
    <YMaps
      query={{
        lang: 'en_US',
        coordorder: 'longlat',
        apikey: "6a7ecd4e-5dac-4c29-8e69-110f766bb06c"
      }}
    >
      <YMap
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
        <Placemark
          geometry={data.center}
          properties={{
            iconCaption: data.capital,
          }}
          options={{
            preset: 'islands#redDotIconWithCaption'
          }}
        />
        <Polygon
          geometry={data.geometry}
          options={{
            fillColor: '#FF000011',
            strokeColor: '#FF0000',
            strokeWidth: 5
          }}
        />
        <TypeSelector />
      </YMap>
    </YMaps>
  )
};
