import { createTheme } from '@mui/material';
import { Colors } from 'assets/colors';

export type ThemeOptions = 'dark' | 'light';

export default function createAppTheme(theme: ThemeOptions) {
  const { global } = Colors;
  const color = global[theme];

  return createTheme({
    palette: {
      mode: theme,
      background: {
        default: global[theme].default,
        paper: global[theme].paper,
      },
      primary: {
        main: color.primary,
      },
      error: {
        main: color.error,
      },
      success: {
        main: color.success,
      },
    },
  });
}
