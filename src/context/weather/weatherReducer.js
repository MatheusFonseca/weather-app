import { GET_WEATHER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        city: action.payload.city_name,
        todayWeather: {
          temp: action.payload.temp,
          date: action.payload.date,
          description: action.payload.description,
          currently: action.payload.currently,
          humidity: action.payload.humidity
        },
        loading: 0,
        forecastWeather: [...action.payload.forecast]
      };
    default:
      return state;
  }
};
