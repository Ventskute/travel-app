import React from 'react';
import WidgetTime from './WidgetTime/WidgetTime';
import Weather from './Weather/Weather';
import GeneralWidgetRate from './GeneralWidgetRate/GeneralWidgetRate';
import './Widgets.scss';

function Widgets() {
  return (
    <div className="country-promo__widgets">
      <WidgetTime />
      <Weather />
      <GeneralWidgetRate />
    </div>
  );
}

export default Widgets;
