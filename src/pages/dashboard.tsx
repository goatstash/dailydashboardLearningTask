import { Container, Title } from '@mantine/core';
import UserForm from '../components/UserForm';
import WeatherComponent from '../components/WeatherComponent';
import TodoList from '../components/TodoList';

const Dashboard = () => {
  return (
    <Container>
      <Title order={1}>This is the Dashboard page</Title>
      <WeatherComponent />
      <UserForm />
      <TodoList />
    </Container>
  );
};

export default Dashboard;
