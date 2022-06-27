import axios from 'axios';

export const fetchWeatherData = async () => {
  const response = await axios.get('http://mock-api-call/weather/get-weather');
  return response.data.result.weather;
};
