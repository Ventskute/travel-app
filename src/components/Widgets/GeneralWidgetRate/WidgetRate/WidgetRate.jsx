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
    <p className="rate__content">
      {`${toConvert}-${currency}`}: {rate}
    </p>
  );
}

export default RateWidget;
