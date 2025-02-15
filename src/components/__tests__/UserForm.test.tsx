import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from '../UserForm';
import * as localStorageState from '../UseStateWithLocalStorage';
describe('Input form', () => {
  test('input should initially be empty', () => {
    render(<UserForm />);

    const userInput = screen.getByRole('textbox');
    expect(userInput.value).toBe('');
  });

  test('should be able to type a name', () => {
    const mockSetValue = jest.fn();
    jest
      .spyOn(localStorageState, 'useStateWithLocalStorage')
      .mockImplementation(() => ['', mockSetValue]);
    const { getByRole } = render(<UserForm />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'Harry' } });
    expect(mockSetValue).toHaveBeenCalledTimes(1);
  });
});
