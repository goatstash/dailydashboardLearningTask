import { render, screen, renderHook, act, fireEvent } from '@testing-library/react';
import UserForm from '../UserForm';
import { FormInput } from '../../types';
import userEvent from '@testing-library/user-event';
import UseStateWithLocalStorage from '../UseStateWithLocalStorage';

// const typeIntoForm = ({ name }: FormInput) => {
//   const inputElement = screen.getByRole('textbox', {
//     name: /name/i,
//   });

//   if (name) {
//     userEvent.type(inputElement, name);
//   }

//   return {
//     inputElement,
//   };
// };

describe('Input form', () => {
  // test('input should initially be empty', () => {
  //   render(<UserForm />);

  //   const userInput = screen.getByRole('textbox');
  //   expect(userInput.value).toBe('');
  // });

  test('should be able to type a name', () => {
    const mockSetState = jest.fn();
    jest.mock('../UseStateWithLocalStorage', () => ({
      UseStateWithLocalStorage: () => ['', mockSetState],
    }));
    // jest.spyOn(hooks, 'UseStateWithLocalStorage').mockImplementation(() => ['', mockSetState]);

    const { getByRole } = render(<UserForm />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'Harry' } });

    expect(mockSetState).toHaveBeenCalled();
  });
});

// describe('Test local storage', () => {
//   test('should set local storage with default value', () => {
//     const TEST_KEY: string | null = 'form';
//     const TEST_VALUE = { name: 'matt' };
//     renderHook(() => useStateWithLocalStorage(TEST_VALUE, TEST_KEY));
//     expect(JSON.parse(localStorage.getItem(TEST_KEY))).toEqual(TEST_VALUE);
//   });

//   test('should update localStorage when state changes', () => {
//     const TEST_KEY: string | null = 'form';
//     const TEST_VALUE = { name: 'bill' };

//     const { result } = renderHook(() => useStateWithLocalStorage(TEST_VALUE, TEST_KEY));

//     // Pulls from result.current to update state
//     const [, setValue] = result.current;
//     const newValue = { name: 'john' };

//     act(() => {
//       setValue(newValue);
//     });

//     expect(JSON.parse(localStorage.getItem(TEST_KEY))).toEqual(newValue);
//   });
// });
