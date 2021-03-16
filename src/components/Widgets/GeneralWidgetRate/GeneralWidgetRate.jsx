import React from 'react';
import WidgetRate from './WidgetRate/WidgetRate';

function GeneralWidgetRate({ currency }) {
  const [state, setstate] = React.useState(null);
  const backEndPath = 'localhost:3000';
  const currenciesToConvert = ['USD', 'EUR', 'BYN'];

  React.useEffect(() => {
    fetch(`http://${backEndPath}/countries/CAN`)
      .then((res) => res.json())
      .then((data) => setstate(data));
      console.log(currency)
  }, []);

  return (
    <div className="widget rate-widget">
      <h3 className="rate__title">Rates of major currencies</h3>
    {/* widgetRate widgetRate widgetRate */}
      {state && currenciesToConvert.map((el, index) => <WidgetRate currency={currency} toConvert={el} key={index} />)}
    </div>
  );
}

export default GeneralWidgetRate;
