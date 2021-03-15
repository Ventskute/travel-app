import React from 'react';
import WidgetTime from './WidgetTime/WidgetTime';
import Weather from './Weather/Weather';
import GeneralWidgetRate from './GeneralWidgetRate/GeneralWidgetRate';
import './Widgets.scss';

function Widgets({countryState}) {
  const {capital: {timeZoneName}, currency} = countryState
  console.log(currency)
  return (
    <div className="country-promo__widgets">
      <WidgetTime timeZoneName={timeZoneName} />
      <Weather />
      <GeneralWidgetRate currency={currency}/>
    </div>
  );
}

export default Widgets;
