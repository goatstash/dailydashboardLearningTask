import { render, screen, renderHook, act, fireEvent } from '@testing-library/react';
import UserForm from '../UserForm';
import { FormInput } from '../../types';
import userEvent from '@testing-library/user-event';
import * as localStorageState from '../UseStateWithLocalStorage';
import { useStateWithLocalStorage } from '../UseStateWithLocalStorage';

describe('Input form', () => {
  // test('input should initially be empty', () => {
  //   render(<UserForm />);
  //   const userInput = screen.getByRole('textbox');
  //   expect(userInput.value).toBe('');
  //   localStorage.clear();
  // });
  test('should be able to type a name', () => {
    const mockSetValue = jest.fn();
    jest
      .spyOn(localStorageState, 'useStateWithLocalStorage')
      .mockImplementation(() => ['', mockSetValue]);
    const { getByRole } = render(<UserForm />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'Harry' } });
    expect(mockSetValue).toHaveBeenCalledTimes(1);

    // mockSetValue.mockRestore();
  });
});
