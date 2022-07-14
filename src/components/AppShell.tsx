import { AppShell, Navbar, Header } from '@mantine/core';
import NewsComponent from './NewsComponent';
import TodoList from './TodoList';
import WeatherComponent from './WeatherComponent';

function Shell() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={800} p="xs">
          <TodoList />
        </Navbar>
      }
      header={
        <Header height={200} p="xs">
          <WeatherComponent />
        </Header>
      }
    >
      <NewsComponent />
    </AppShell>
  );
}

export default Shell;
