import React from "react";
import { getIcon } from "../utilities";

export const WeekItem = ({ item }) => {
  const { date, weekday, max, min, description } = item;

  return (
    <div className='week-item'>
      <p className='text-bold'>
        {date} <span>{weekday}</span>
      </p>
      <p>
        Min: {min}°&nbsp;&nbsp;Max: {max}°
      </p>
      <i style={{ fontSize: "1rem" }} className={getIcon(description)}></i>
      <p>{description}</p>
    </div>
  );
};
