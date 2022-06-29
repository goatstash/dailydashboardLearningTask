import { Container, Title } from '@mantine/core';
import WeatherComponent from '../components/WeatherComponent';
const Dashboard = () => {
  return (
    <Container>
      <Title order={1}>This is the Dashboard page</Title>
      <WeatherComponent />
    </Container>
  );
};

export default Dashboard;
