import { useContext, useMemo, createContext, Dispatch, SetStateAction } from 'react';
import { useMediaQuery, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useLocalStorage } from '@uidotdev/usehooks';

import createAppTheme, { ThemeOptions } from './theme';

interface ThemeProps {
  theme: ThemeOptions;
  setTheme: Dispatch<SetStateAction<ThemeOptions>>;
}

export const ThemeContext = createContext<ThemeProps>({} as ThemeProps);

const ThemeProvider = ({ children }: ChildrenProps) => {
  const { theme } = useContext(ThemeContext);
  const themeCreated = useMemo(() => createAppTheme(theme), [theme]);

  return <MuiThemeProvider theme={themeCreated} children={children} />;
};

export const AppThemeProvider = ({ children }: ChildrenProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useLocalStorage<ThemeOptions>(
    'theme',
    prefersDarkMode ? 'dark' : 'light'
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider children={children} />
    </ThemeContext.Provider>
  );
};
