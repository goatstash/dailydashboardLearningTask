import { render, screen, renderHook, act, fireEvent } from '@testing-library/react';
import { useStateWithLocalStorage } from '../UseStateWithLocalStorage';

describe('Test local storage', () => {
  test('should set local storage with default value', () => {
    const TEST_KEY: string | null = 'form';
    const TEST_VALUE = { name: 'matt' };
    renderHook(() => useStateWithLocalStorage(TEST_VALUE, TEST_KEY));
    expect(JSON.parse(localStorage.getItem(TEST_KEY))).toEqual(TEST_VALUE);
  });

  test('should update localStorage when state changes', () => {
    jest.clearAllMocks();
    const TEST_KEY: string | null = 'form';
    const TEST_VALUE = { name: 'bill' };

    const { result } = renderHook(() => useStateWithLocalStorage(TEST_VALUE, TEST_KEY));

    // Pulls from result.current to update state
    const [, setValue] = result.current;
    const newValue = { name: 'john' };

    act(() => {
      setValue(newValue);
    });

    expect(JSON.parse(localStorage.getItem(TEST_KEY))).toEqual(newValue);
  });
});
