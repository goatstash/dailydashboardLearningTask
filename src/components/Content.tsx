import { Grid } from '@mantine/core';
import NewsComponent from './NewsComponent';
import TodoList from './TodoList';
import WeatherComponent from './WeatherComponent';
const Content = () => {
  return (
    <Grid grow gutter="xl">
      <Grid.Col span={12}>
        <WeatherComponent />
      </Grid.Col>
      <Grid.Col span={4}>
        <TodoList />
      </Grid.Col>
      <Grid.Col span={4}>
        <NewsComponent />
      </Grid.Col>
    </Grid>
  );
};

export default Content;
