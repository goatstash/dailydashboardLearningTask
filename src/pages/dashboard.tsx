import { Container } from '@mantine/core';

import { Group } from '@mantine/core';
import NewsComponent from '../components/NewsComponent';
import TodoList from '../components/TodoList';
import WeatherComponent from '../components/WeatherComponent';

const Dashboard = () => {
  return (
    <Container style={{ display: 'grid', gap: '20px' }}>
      <Group style={{ gridColumn: '1 / span 3' }}>
        <WeatherComponent />
      </Group>
      <Group style={{ gridColumnStart: 1, gridColumnEnd: 1.5 }}>
        <TodoList />
      </Group>
      <Group style={{ gridColumnStart: 1.5, gridColumnEnd: 3 }}>
        <NewsComponent />
      </Group>
    </Container>
  );
};

export default Dashboard;
