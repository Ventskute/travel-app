import React from 'react';
import './WidgetTime.scss';

function WidgetTime() {
  const [dateOptionsState, setDateOptionsState] = React.useState({
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/New_York',
    i: false,
  });
  React.useEffect(() => {
    setInterval(() => {
        setDateOptionsState({
            ...dateOptionsState,
            i: true,
        })
      }, 1000);
  }, []);

  React.useEffect(() => {
    getCurrentDate();
    // console.log(getCurrentDate());
  }, [dateOptionsState]);

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleString('en-US', dateOptionsState);
  };

  return <div className="widgets__current-time">{getCurrentDate()}</div>;
}

export default WidgetTime;
