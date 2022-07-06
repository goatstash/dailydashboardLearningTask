import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('should add a task to the list and store it to localStorage', () => {
    render(<TodoList />);

    fireEvent.change(screen.getByPlaceholderText('enter a task'), { target: { value: '123' } });

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByLabelText('list')).toBeInTheDocument();

    const localTasks = JSON.parse(localStorage.getItem('localTasks') || '[]');
    expect(localTasks[0].taskName).toEqual('123');
  });

  it('should remove a task from the list and removes it from localStorage', () => {
    render(<TodoList />);

    fireEvent.click(screen.getByRole('button', { name: 'delete-button' }));

    expect(screen.queryByLabelText('list')).not.toBeInTheDocument();

    const localTasks = JSON.parse(localStorage.getItem('localTasks') || '[]');
    expect(localTasks).toEqual([]);
  });
});
