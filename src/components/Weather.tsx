import axios from 'axios';
import { useEffect, useState } from 'react';
import { IWeather } from '../interfaces/IWeather';

const Weather = () => {
  const [minTemp, setMinTemp] = useState<IWeather[]>([]);
  const [maxTemp, setMaxTemp] = useState<IWeather[]>([]);
  const [forcast, setForcast] = useState([]);
  const [description, setDescription] = useState([]);

  const fetchWeatherData = async () => {
    const response = await axios.get('http://mock-api-call/weather/get-weather');

    setMinTemp(response.data.result.weather.min);
    setMaxTemp(response.data.result.weather.max);
    setForcast(response.data.result.weather.forcast);
    setDescription(response.data.result.weather.description);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="container">
      <p className="forcast">Temp: {`${minTemp} to ${maxTemp}`}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default Weather;
