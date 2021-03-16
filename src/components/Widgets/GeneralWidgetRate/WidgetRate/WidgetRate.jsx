import React from 'react';
import './WidgetRate.scss';

function RateWidget({ currency, toConvert }) {
  const [rate, setRate] = React.useState('');

  React.useEffect(() => {
    fetch(
      `https://free.currconv.com/api/v7/convert?q=${toConvert}_${currency}&compact=ultra&apiKey=c777740154b54cff282f`,
    )
      .then((res) => res.json())
      .then((data) => setRate(data[`${toConvert}_${currency}`]));
  }, []);

  return (
    <h4 className="rate__content">
      <span>{`${toConvert} to ${currency} currency `}</span>
      <span>{rate}</span>
    </h4>
  );
}

export default RateWidget;
