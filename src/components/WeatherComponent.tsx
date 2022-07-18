import { WeatherContext } from './context/WeatherContext';
import { Title, Text, Container } from '@mantine/core';
import { useContext } from 'react';

const WeatherComponent = () => {
  const weather = useContext(WeatherContext);

  return (
    <Container style={{ width: '100%' }}>
      <Title order={2}>Today&apos;s Weather</Title>
      <Text size="lg">
        {weather?.weather?.forcast} with a low of {weather?.weather?.min} and a high of{' '}
        {weather?.weather?.max}
      </Text>
      <Text size="md" data-testid="description">
        {weather?.weather?.description}
      </Text>
    </Container>
  );
};

export default WeatherComponent;
