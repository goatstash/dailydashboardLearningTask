import { AppShell, Aside } from '@mantine/core';
import NewsComponent from './NewsComponent';

import TodoList from './TodoList';

function Shell() {
  return (
    <AppShell
      padding="md"
      aside={
        <Aside width={{ base: 550 }} height={800} p="xs">
          <NewsComponent />
        </Aside>
      }
    >
      <TodoList />
    </AppShell>
  );
}

export default Shell;
