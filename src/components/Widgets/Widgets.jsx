import React from 'react';
import WidgetTime from './WidgetTime/WidgetTime';
import WidgetRate from './WidgetRate/WidgetRate';
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
