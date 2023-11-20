import { createTheme, PaletteMode } from '@mui/material';
import { Colors } from 'assets/colors';

export default function createAppTheme(theme: PaletteMode) {
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
