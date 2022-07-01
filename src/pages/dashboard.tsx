import { Container, Title } from '@mantine/core';
import UserForm from '../components/UserForm';
import WeatherComponent from '../components/WeatherComponent';
const Dashboard = () => {
  return (
    <Container>
      <Title order={1}>This is the Dashboard page</Title>
      <WeatherComponent />
      <UserForm />
    </Container>
  );
};

export default Dashboard;
