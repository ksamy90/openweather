import axios from "axios";

const API_KEY = "76eaf7e6445f9efeaa807693e2d7a46b";
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
  return {
    type: "FETCH_WEATHER",
    payload: city,
  };
};

export const startFetchWeather = (city) => {
  return (dispatch) => {
    const url = `${API_URL}&q=${city}`;
    const request = axios.get(url);

    return request.then((cities) => {
      dispatch(fetchWeather(cities));
    });
  };
};
