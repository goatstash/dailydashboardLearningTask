import { Container, Title } from '@mantine/core';
import Weather from '../components/Weather';
const Dashboard = () => {
  return (
    <Container>
      <Title order={1}>This is the Dashboard page</Title>
      <Weather />
    </Container>
  );
};

export default Dashboard;
