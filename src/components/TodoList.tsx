import { Button, Container, List, TextInput, Title, Group } from '@mantine/core';
import type { ChangeEvent } from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BiTag } from 'react-icons/bi';
const TodoList = () => {
  const isMounted = useRef(false);
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState<Array<{ taskName: string; id: string }>>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDelete = (taskToDelete: unknown) => {
    const deleted = todoList.filter((t) => t.id !== taskToDelete);
    setTodoList(deleted);
    localStorage.setItem('localTasks', JSON.stringify(deleted));
  };

  const addTask = () => {
    setTodoList([
      ...todoList,
      {
        taskName: task,
        id: new Date().toString(),
      },
    ]);
    setTask('');
  };

  useLayoutEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem('localTasks') || '[]');
    if (localTasks.length > 0) setTodoList(localTasks);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('localTasks', JSON.stringify(todoList));
    } else {
      isMounted.current = true;
    }
  }, [todoList]);

  return (
    <Container aria-label="container" style={{ display: 'flex', flexDirection: 'column' }}>
      <Group style={{ justifyContent: 'space-between' }}>
        <Title order={2}>Daily ToDo List</Title>

        <Button type="button" onClick={addTask} name="add-button">
          +
        </Button>
      </Group>

      <TextInput
        type="text"
        name="task"
        placeholder="enter a task"
        onChange={handleChange}
        value={task}
      />

      {todoList.map((todo) => (
        <List
          aria-label="list"
          spacing="xl"
          size="sm"
          center
          icon={
            <BiTag
              style={{ transform: 'rotate(180deg)' }}
              color="gray"
              radius="xl"
              size={24}
              data-testid={`delete-todo-${todo.id}`}
              type="button"
              aria-label="delete-button"
              onClick={() => {
                handleDelete(todo.id);
              }}
            />
          }
          key={todo.id}
        >
          <List.Item style={{ listStyle: 'none' }} aria-label="list-item">
            {todo.taskName}
          </List.Item>
        </List>
      ))}
    </Container>
  );
};

export default TodoList;
