import React from 'react';
import './RateWidget.scss';

function RateWidget({ currency = 'BYN' }) {
  const [rate, setRate] = React.useState('');

  React.useEffect(() => {
    fetch(
      `https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&apiKey=c777740154b54cff282f`,
    )
      .then((res) => res.json())
      .then((data) => setRate(data[`USD_${currency}`]));
  }, []);

  return (
    <div className="widjet-rate">
      <span>{`USD to ${currency} currency `}</span>
      <span>{rate}</span>
    </div>
  );
}

export default RateWidget;
