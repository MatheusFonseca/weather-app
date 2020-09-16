import React, { useReducer } from "react";
import WeatherContext from "./weatherContext";
import weatherReducer from "./weatherReducer";
import { GET_WEATHER, WEATHER_ERROR } from "../types";
import axios from "axios";

const WeatherState = props => {
  const initialState = {
    loading: true,
    city: null,
    woeid: 455986,
    todayWeather: {
      temp: null,
      date: "",
      description: null,
      currently: null,
      humidity: null
    },
    forecastWeather: [
      {
        date: null,
        weekday: null,
        max: null,
        min: null,
        description: null,
        condition: null
      }
    ]
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  // GET_WEATHER
  const getWeather = async () => {
    try {
      const res = await axios.get("/weather?woeid=455986");

      dispatch({
        type: GET_WEATHER,
        payload: res.data.results
      });
    } catch (err) {
      dispatch({
        type: WEATHER_ERROR,
        payload: err
      });
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        loading: state.loading,
        city: state.city,
        woeid: state.woeid,
        todayWeather: state.todayWeather,
        forecastWeather: state.forecastWeather,
        getWeather
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
