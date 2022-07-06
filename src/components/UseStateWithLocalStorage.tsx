import { useState, useEffect } from 'react';

export const useStateWithLocalStorage = (defaultValue: any, key: string) => {
  const [value, setValue] = useState(() => {
    const storedValues = localStorage.getItem(key);

    return storedValues !== null ? JSON.parse(storedValues) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

