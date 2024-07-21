import { createTheme, PaletteMode } from '@mui/material';
import { Colors } from '../colors';

export default function createAppTheme(theme: PaletteMode) {
  const { global } = Colors;
  const color = global[theme];

  return createTheme({
    palette: {
      mode: theme,
      background: {
        default: color.default,
        paper: color.paper,
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
