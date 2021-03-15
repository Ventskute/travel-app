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
  }, []);

  return (
    <div>
      widgetRate widgetRate widgetRate
      {/* {state && currenciesToConvert.map((el) => <WidgetRate currency={currency} toConvert={el} />)} */}
    </div>
  );
}

export default GeneralWidgetRate;
