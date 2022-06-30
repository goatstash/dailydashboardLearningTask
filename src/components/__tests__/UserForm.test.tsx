import { render, screen, renderHook, act } from '@testing-library/react';
import UserForm from '../UserForm';
import { FormInput } from '../../types';
import userEvent from '@testing-library/user-event';
import useStateWithLocalStorage from '../UseStateWithLocalStorage';
import { debug } from 'console';

const typeIntoForm = ({ name }: FormInput) => {
  const inputElement = screen.getByRole<HTMLInputElement>('textbox', {
    name: /name/i,
  });

  if (name) {
    userEvent.type(inputElement, name);
  }

  return {
    inputElement,
  };
};

describe('Input form', () => {
  beforeEach(() => {
    render(<UserForm />);
  });

  test('input should initially be empty', () => {
    const userInput = screen.getByRole('textbox');
    expect(userInput.value).toBe('');
  });

  test('should be able to type a name', () => {
    const { inputElement } = typeIntoForm({
      name: 'jeff',
    });
    expect(inputElement.value).toBe('jeff');
    localStorage.clear();
  });
});

describe('Test local storage', () => {
  test('should set local storage with default value', () => {
    const TEST_KEY: string | null = 'form';
    const TEST_VALUE = { name: 'matt' };
    renderHook(() => useStateWithLocalStorage(TEST_VALUE, TEST_KEY));
    expect(JSON.parse(localStorage.getItem(TEST_KEY))).toEqual(TEST_VALUE);
  });

  test('should update localStorage when state changes', () => {
    const TEST_KEY: string | null = 'form';
    const TEST_VALUE = { name: 'bill' };

    const { result } = renderHook(() => useStateWithLocalStorage(TEST_VALUE, TEST_KEY));

    //why is the comma used below, is it just ignoring value? Pulls from result.current to update state
    const [, setValue] = result.current;
    const newValue = { name: 'john' };
    act(() => {
      setValue(newValue);
    });

    expect(JSON.parse(localStorage.getItem(TEST_KEY))).toEqual(newValue);
  });
});
