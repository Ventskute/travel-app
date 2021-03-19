import React from 'react';
import './WidgetRate.scss';

function RateWidget({ currency, toConvert, rate }) {
  return (
    <p className="rate__content">
      {`${toConvert}-${currency}`}: {rate}
    </p>
  );
}

export default RateWidget;
