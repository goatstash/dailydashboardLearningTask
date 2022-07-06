import { Button, Container, List, TextInput } from '@mantine/core';
import type { ChangeEvent } from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

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
    setTodoList((prevTodoList) =>
      prevTodoList.concat({
        taskName: task,
        id: new Date().toString(),
      }),
    );
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
    <Container aria-label="container">
      <TextInput
        type="text"
        name="task"
        placeholder="enter a task"
        onChange={handleChange}
        value={task}
      />
      <Button type="button" onClick={addTask} name="add-button">
        Add Task
      </Button>
      {todoList.map((todo) => (
        <Container key={todo.id}>
          <List
            aria-label="list"
            icon={
              <Button
                data-testid={`delete-todo-${todo.id}`}
                type="button"
                aria-label="delete-button"
                onClick={() => {
                  handleDelete(todo.id);
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
