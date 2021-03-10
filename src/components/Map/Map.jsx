import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const defaultValue = {
  center: [55.75, 37.57],
  zoom: 9
}

export default function CountryMap() {
  return (
    <YMaps>
      <div>
        My awesome application with maps!
        <Map defaultState={defaultValue} />
      </div>
    </YMaps>
  )
};