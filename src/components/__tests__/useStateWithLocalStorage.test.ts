import { renderHook, act } from '@testing-library/react';
import { useStateWithLocalStorage } from '../UseStateWithLocalStorage';

describe('Test local storage', () => {
  test('should set local storage with default value', () => {
    const TEST_KEY: string | null = 'form';
    const TEST_VALUE = { name: 'matt' };
    renderHook(() => useStateWithLocalStorage(TEST_VALUE, TEST_KEY));
    expect(JSON.parse(localStorage.getItem(TEST_KEY) ?? 'error')).toEqual(TEST_VALUE);
  });

  test('should update localStorage when state changes', () => {
    const TEST_KEY: string | null = 'form';
    const TEST_VALUE = { name: 'bill' };

    const { result } = renderHook(() => useStateWithLocalStorage(TEST_VALUE, TEST_KEY));

    // Pulls from result.current to update state
    const [, setValue] = result.current;
    const newValue = { name: 'john' };

    act(() => {
      setValue(newValue);
    });

    expect(JSON.parse(localStorage.getItem(TEST_KEY) ?? 'error')).toEqual(newValue);
  });
});
