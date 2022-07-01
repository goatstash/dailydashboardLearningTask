import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from '../UserForm';
<<<<<<< HEAD
=======
import * as localStorageState from '../UseStateWithLocalStorage';
>>>>>>> 14d849303f58e029899381750b65afdc37424cd4

import * as localStorageState from '../UseStateWithLocalStorage';

describe('Input form', () => {
  test('input should initially be empty', () => {
    render(<UserForm />);
<<<<<<< HEAD
    const userInput = screen.getByRole('textbox');
    expect(userInput.value).toBe('');
    localStorage.clear();
  });
=======

    const userInput = screen.getByRole('textbox');
    expect(userInput.value).toBe('');
  });

>>>>>>> 14d849303f58e029899381750b65afdc37424cd4
  test('should be able to type a name', () => {
    const mockSetValue = jest.fn();
    jest
      .spyOn(localStorageState, 'useStateWithLocalStorage')
      .mockImplementation(() => ['', mockSetValue]);
<<<<<<< HEAD
    const { getByRole } = render(<UserForm />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'Harry' } });
=======

    const { getByRole } = render(<UserForm />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'Harry' } });

>>>>>>> 14d849303f58e029899381750b65afdc37424cd4
    expect(mockSetValue).toHaveBeenCalledTimes(1);
  });
});
