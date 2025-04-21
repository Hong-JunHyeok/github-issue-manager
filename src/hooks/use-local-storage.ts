import { useState } from "react";

export const useLocalStorage = <T = unknown>(key: string, initialValue?: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.error(error);
    }
  });

  const setValue = (value: T | ((value: T) => T)) => {
    const nextValue = value instanceof Function ? value(storedValue) : value;
    try {
      setStoredValue(nextValue);
      window.localStorage.setItem(key, JSON.stringify(nextValue));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
