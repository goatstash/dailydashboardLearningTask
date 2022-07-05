import { Button, Container, List, TextInput } from '@mantine/core';
import type { ChangeEvent, ReactElement } from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const TodoList = (): ReactElement => {
  const isMounted = useRef(false);
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState<Array<{ taskName: string }>>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const handleDelete = (key: number): void => {
    setTodoList((prevTodoList) => prevTodoList.filter((todo, index) => index !== key));
  };

  const addTask = (): void => {
    setTodoList((prevTodoList) =>
      prevTodoList.concat({
        taskName: task,
      }),
    );
    setTask('');
  };

  useLayoutEffect((): void => {
    const localTasks = JSON.parse(localStorage.getItem('localTasks') || '[]');
    if (localTasks.length > 0) setTodoList(localTasks);
  }, []);

  useEffect((): void => {
    if (isMounted.current) {
      localStorage.setItem('localTasks', JSON.stringify(todoList));
    } else {
      isMounted.current = true;
    }
  }, [todoList]);

  return (
    <Container data-testid="container">
      <TextInput
        data-testid="task-input"
        type="text"
        name="task"
        placeholder="enter a task"
        onChange={handleChange}
        value={task}
      />
      <Button type="button" onClick={addTask} data-testid="add-todo">
        Add Task
      </Button>
      {todoList.map((todo, key) => (
        <Container key={key}>
          <List
            data-testid={`todo-${key}`}
            icon={
              <Button
                data-testid={`delete-todo-${key}`}
                type="button"
                onClick={() => {
                  handleDelete(key);
                }}
              >
                X
              </Button>
            }
          >
            <List.Item>{todo.taskName}</List.Item>
          </List>
        </Container>
      ))}
    </Container>
  );
};

export default TodoList;
