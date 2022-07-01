import { useState, useEffect } from 'react';

export const useStateWithLocalStorage = (defaultValue: string, key: string) => {
  const [value, setValue] = useState(() => {
    const storedValues = localStorage.getItem(key);

    return storedValues !== null ? JSON.parse(storedValues) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
<<<<<<< HEAD
=======

// export default useStateWithLocalStorage;
>>>>>>> 14d849303f58e029899381750b65afdc37424cd4
