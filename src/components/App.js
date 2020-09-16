import React from "react";
import { Today } from "./Today";
import { Week } from "./Week";
import "../css/normalize.css";
import "../css/skeleton.css";
import "../css/App.css";
import "../css/flaticon/flaticon.css";

import WeatherState from "../context/weather/WeatherState";

export const App = () => {
  return (
    <WeatherState>
      <div className='App'>
        <div className='container container-narrow'>
          <Today />
          <Week />
        </div>
      </div>
    </WeatherState>
  );
};
