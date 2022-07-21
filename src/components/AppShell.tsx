import { AppShell, Aside, Header } from '@mantine/core';
import NewsComponent from './NewsComponent';
import TodoList from './TodoList';
import UserForm from './UserForm';
import WeatherComponent from './WeatherComponent';

function Shell() {
  return (
    <AppShell
      padding="md"
      aside={
        <Aside width={{ base: 550 }} height={800} p="xs">
          <NewsComponent />
        </Aside>
      }
      header={
        <Header height={200} p="xs">
          <UserForm />
          <WeatherComponent />
        </Header>
      }
    >
      <TodoList />
    </AppShell>
  );
}

export default Shell;
