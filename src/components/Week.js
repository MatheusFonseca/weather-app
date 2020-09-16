import React, { useContext, Fragment } from 'react';
import WeatherContext from '../context/weather/weatherContext';
import { WeekItem } from './WeekItem';

export const Week = () => {
  const weatherContext = useContext(WeatherContext);

  let { forecastWeather, loading } = weatherContext;

  if (!loading) {
    return (
      <div className='week'>
        {forecastWeather.slice(1, 6).map((item, index) => (
          <WeekItem key={index} item={item} />
        ))}
      </div>
    );
  } else {
    return <Fragment></Fragment>;
  }
};
