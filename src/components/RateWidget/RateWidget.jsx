import React from 'react';
import axios from 'axios';
import './RateWidget.scss';

function RateWidget() {
  const [rates, setRates] = React.useState([]);
  let flag = false;
  React.useEffect(() => {
    fetchRates();
  }, []);
  React.useEffect(() => {
    axios
      .get(
        'https://free.currconv.com/api/v7/convert?q=USD_BYN&compact=ultra&apiKey=c777740154b54cff282f',
      )
      .then(({ data }) => {
        setRates({
          ...rates,
          USD_BYN: data.USD_BYN,
        });
      });
  }, [rates.length]);

  const fetchRates = () => {
    axios
      .get(
        'https://free.currconv.com/api/v7/convert?q=USD_EUR,USD_RUB&compact=ultra&apiKey=c777740154b54cff282f',
      )
      .then(({ data }) => {
        setRates({
          ...rates,
          USD_EUR: data.USD_EUR,
          USD_RUB: data.USD_RUB,
        });
      });
  };

  return <div>{JSON.stringify(rates)}</div>;
}

export default RateWidget;
