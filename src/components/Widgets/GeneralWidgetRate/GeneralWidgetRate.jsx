import React from 'react';
import { useSelector } from 'react-redux';
import WidgetRate from './WidgetRate/WidgetRate';

function GeneralWidgetRate({ currency }) {
  const { dict } = useSelector(state => state);
  const [rate, setRate] = React.useState('');
  const currenciesToConvert = ['USD', 'EUR', 'BYN'];

  React.useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/c0486f36dd3dcdc9660282bc/latest/${currency}`,
    )
      .then((res) => res.json())
      .then((data) => setRate(data.conversion_rates));
  }, []);

  return (
    <div className="widget rate-widget">
      <h3 className="rate__title">{dict.CURRENCIES}</h3>
      {currency && currenciesToConvert.map((el, index) => <WidgetRate currency={currency} toConvert={el} rate={(1 / rate[el]).toFixed(3)} key={index} />)}
    </div>
  );
}

export default GeneralWidgetRate;
