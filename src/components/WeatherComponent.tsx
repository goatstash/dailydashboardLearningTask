import axios from 'axios';
import { useEffect, useState } from 'react';
import { Weather } from '../types';
import { MdWbSunny } from 'react-icons/md';
import { IoIosPartlySunny } from 'react-icons/io';
import { BsFillCloudSnowFill } from 'react-icons/bs';
import { Title, Text, Container } from '@mantine/core';

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
    <Container>
      <Title order={2}>
        {weather?.forcast === 'Sunny' ? (
          <MdWbSunny data-testid="sunny" />
        ) : weather?.forcast === 'Snowing' ? (
          <BsFillCloudSnowFill data-testid="snowing" />
        ) : (
          <IoIosPartlySunny data-testid="overcast" />
        )}
      </Title>

      <Text size="xl" data-testid="forcast">
        {weather?.forcast}
      </Text>
      <Text size="lg" data-testid="temp">
        Temp: {`${weather?.min} to ${weather?.max}`}
      </Text>
      <Text size="md" data-testid="description">
        {weather?.description}
      </Text>
    </Container>
  );
};

export default WeatherComponent;
