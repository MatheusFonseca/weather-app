import React, { useContext, useEffect, Fragment } from 'react';
import WeatherContext from '../context/weather/weatherContext';
import { getFormattedDate, getIcon } from '../utilities';

export const Today = () => {
  const weatherContext = useContext(WeatherContext);

  const {
    city,
    todayWeather: { temp, date, description, humidity },
    forecastWeather,
    getWeather,
    loading,
  } = weatherContext;

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line
  }, []);

  const now = new Date();
  const today = forecastWeather[0];

  // @todo Use component level state to update clock

  if (!loading) {
    return (
      <div className='today'>
        <div className='today-date'>
          <p className='today-weekday'>{city}</p>
          <p className='today-weekday'>
            {getFormattedDate(today.weekday, date)}
          </p>
        </div>
        <div className='today-time'>
          <p>{now.getHours() + ':' + ('0' + now.getMinutes()).slice(-2)}</p>
        </div>
        <div className='today-weather'>
          <p className='today-temp'>{temp}°</p>
          <div>
            <i className={getIcon(description) + ' today-icon'}></i>
            <p className='today-desc'>{description}</p>
          </div>
        </div>
        <div className='today-minmax'>
          <p>Min: {today.min}°</p>
          &nbsp; &nbsp;
          <p>Max: {today.max}°</p>
          &nbsp; &nbsp;
          <p>Umidade: {humidity}%</p>
        </div>
      </div>
    );
  } else {
    return <Fragment></Fragment>;
  }
};
