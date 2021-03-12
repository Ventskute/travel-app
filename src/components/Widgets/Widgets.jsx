import React from 'react';
import { WidgetTime, WidgetRate } from '../';
import './Widgets.scss';

function Widgets() {
  return (
    <div className="country-promo__widgets">
      <WidgetTime />
      <WidgetRate />
    </div>
  );
}

export default Widgets;
