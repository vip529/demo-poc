import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, defaultValue: string) => {
  const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key) || '{}') || defaultValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default useLocalStorage;
