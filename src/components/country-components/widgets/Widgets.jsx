import React from 'react';
import { WidgetRate, WidgetTime, WidgetWather } from '../';

function Widgets() {
  return (<div className="country-promo__widgets">
      <WidgetTime />
      <WidgetWather />
      <WidgetRate />
  </div>);
}

export default Widgets;
