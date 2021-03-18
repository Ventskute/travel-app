import React from 'react';
import { useSelector } from 'react-redux';

import { YMaps, Map as YMap, FullscreenControl, GeoObject, TypeSelector, Placemark, Polygon } from 'react-yandex-maps';

import './Map.scss';

export default function Map({ data }) {
  const { locale } = useSelector(state => state);

  return (
    <div className="wrapper map-wrapper">
    <YMaps
      query={{
        lang: locale,
        coordorder: 'longlat',
        apikey: "6a7ecd4e-5dac-4c29-8e69-110f766bb06c"
      }}
    >
      <YMap
        width='100%'
        height='100%'
        className='map'
        defaultState={{
          center: data.capital.coordinates,
          zoom: data.zoom
        }}
        defaultOptions={{
          autoFitToViewport: 'always',
          exitFullscreenByEsc: true,
          nativeFullscreen: true,
        }}
      >
        <FullscreenControl/>
        <Placemark
          geometry={data.capital.coordinates}
          properties={{
            iconCaption: data.capital.name,
          }}
          options={{
            preset: 'islands#redDotIconWithCaption'
          }}
        />
        { data.geometry && data.geometry.map(poly => (
          <Polygon
            geometry={poly}
            options={{
              fillColor: '#FF000011',
              strokeColor: '#FF0000',
              strokeWidth: 5
            }}
          />
        ))
        }
        <TypeSelector />
      </YMap>
    </YMaps>
    </div>
  )
};
