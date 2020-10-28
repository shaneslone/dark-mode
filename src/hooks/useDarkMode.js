import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = initialValue => {
  const [dark, setDark] = useLocalStorage('dark', initialValue);

  return [dark, setDark];
};
