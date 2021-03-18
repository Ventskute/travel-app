import React from 'react';
import { useSelector } from 'react-redux';
import './WidgetTime.scss';

function WidgetTime({ timeZoneName, lang = 'en-US' }) {
  const { dict } = useSelector(state => state);
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

  return (
    <div className="widget widgets__current-time">
      <h3 className="current-time__title">{dict.DATE_TIME}</h3>
      <p className="current-time__value">{currentDate}</p>
    </div>
  );
}

export default WidgetTime;
