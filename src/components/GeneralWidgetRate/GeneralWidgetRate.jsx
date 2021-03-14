import React from 'react';
import WidgetRate from '../WidgetRate/WidgetRate';

function GeneralWidgetRate() {
  const [state, setstate] = React.useState(null);
  const backEndPath = 'localhost:3000';
  const currenciesToConvert = ['USD', 'EUR', 'BYN'];

  React.useEffect(() => {
    fetch(`http://${backEndPath}/countries/CAN`)
      .then((res) => res.json())
      .then((data) => setstate(data));
  }, []);

  return state ? (
    <div>
      {currenciesToConvert.map((el) => (
        <WidgetRate data={state} toConvert={el} />
      ))}
    </div>
  ) : (
    <div>loading...</div>
  );
}

export default GeneralWidgetRate;
