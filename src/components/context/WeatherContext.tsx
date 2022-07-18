import { createContext, useState, useEffect } from 'react';
import { Weather } from '../../types';
import axios from 'axios';
import { WeatherContextType, WeatherContextProviderProps } from '../../types';

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherContextProvider = ({ children }: WeatherContextProviderProps) => {
  const [weather, setWeather] = useState<Weather | null>();
  const fetchWeatherData = async () => {
    const response = await axios.get('http://mock-api-call/weather/get-weather');

    setWeather(response.data.result.weather);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);
  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>{children}</WeatherContext.Provider>
  );
};
