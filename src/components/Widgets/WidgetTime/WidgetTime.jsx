import React from 'react';
import './WidgetTime.scss';

function WidgetTime({ timeZoneName, lang = 'en-US' }) {
  const [currentDate, setCurrentDate] = React.useState(getCurrentDate());

  React.useEffect(() => {
    setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 1000);
  }, []);

  function getCurrentDate() {
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timeZoneName,
    };
    const date = new Date();
    return date.toLocaleString(lang, dateOptions);
  }

  return <div className="widgets__current-time">{currentDate}</div>;
}

export default WidgetTime;
