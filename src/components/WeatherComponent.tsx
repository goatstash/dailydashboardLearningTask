import axios from 'axios';
import { Weather } from '../types';
import UserForm from './UserForm';
import { Title, Text, Container } from '@mantine/core';
import { useEffect, useState, createContext } from 'react';

export const WeatherContext = createContext<any>(null);

const WeatherComponent = () => {
  const [weather, setWeather] = useState<Weather | null>();
  const fetchWeatherData = async () => {
    const response = await axios.get('http://mock-api-call/weather/get-weather');

    setWeather(response.data.result.weather);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <Container style={{ width: '100%' }}>
      <WeatherContext.Provider value={weather?.forcast}>
        <UserForm />
      </WeatherContext.Provider>
      <Title order={2}>Today&apos;s Weather</Title>
      <Text size="lg">
        {weather?.forcast} with a low of {weather?.min} and a high of {weather?.max}
      </Text>
      <Text size="md" data-testid="description">
        {weather?.description}
      </Text>
    </Container>
  );
};

export default WeatherComponent;
