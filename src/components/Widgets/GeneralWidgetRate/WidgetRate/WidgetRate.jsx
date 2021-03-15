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
    <div className="widget-rate">
      <span>{`${toConvert} to ${currency} currency `}</span>
      <span>{rate}</span>
    </div>
  );
}

export default RateWidget;
