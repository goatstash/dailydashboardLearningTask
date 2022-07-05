import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('should render without errors', () => {
    render(<TodoList />);

    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('should add a task to the list and stores it to localStorage', () => {
    render(<TodoList />);

    fireEvent.change(screen.getByTestId('task-input'), { target: { value: '123' } });

    fireEvent.click(screen.getByTestId('add-todo'));

    expect(screen.getByTestId('todo-0')).toBeInTheDocument();

    const localTasks = JSON.parse(localStorage.getItem('localTasks') || '[]');
    expect(localTasks).toEqual([{ taskName: '123' }]);
  });

  it('should remove a task from the list and removes it from localStorage', () => {
    render(<TodoList />);

    fireEvent.click(screen.getByTestId('delete-todo-0'));

    expect(screen.queryByTestId('todo-0')).not.toBeInTheDocument();

    const localTasks = JSON.parse(localStorage.getItem('localTasks') || '[]');
    expect(localTasks).toEqual([]);
  });
});
