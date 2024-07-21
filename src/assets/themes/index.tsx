import { useContext, useMemo, createContext, Dispatch, SetStateAction } from 'react';
import { useMediaQuery, ThemeProvider as MuiThemeProvider, PaletteMode } from '@mui/material';

import createAppTheme from './theme';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface ThemeProps {
  theme: PaletteMode;
  setTheme: Dispatch<SetStateAction<PaletteMode>>;
}

export const ThemeContext = createContext<ThemeProps>({} as ThemeProps);

const ThemeProvider = ({ children }: ChildrenProps) => {
  const { theme } = useContext(ThemeContext);
  const themeCreated = useMemo(() => createAppTheme(theme), [theme]);

  return <MuiThemeProvider theme={themeCreated} children={children} />;
};

export const AppThemeProvider = ({ children }: ChildrenProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useLocalStorage('theme', prefersDarkMode ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider children={children} />
    </ThemeContext.Provider>
  );
};
