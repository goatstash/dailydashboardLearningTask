import { AppShell, Navbar, Header } from '@mantine/core';
import NewsComponent from './NewsComponent';
// import NewsComponent from './NewsComponent';
import TodoList from './TodoList';
// import UserForm from './UserForm';
import WeatherComponent from './WeatherComponent';

function Demo() {
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

      // eslint-disable-next-line react/no-children-prop
    >
      <NewsComponent />
    </AppShell>
  );
}

export default Demo;
