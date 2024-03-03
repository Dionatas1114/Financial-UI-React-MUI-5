import { useContext } from 'react';
import { Brightness3 as DarkModeIcon, WbSunny as LightModeIcon } from '@mui/icons-material';

import { Checkbox, Children, Ball, Label, SunIcon, MoonIcon } from './styles';
import { ThemeContext } from 'assets/themes';

export default function SwitchTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Children>
      <Checkbox
        id="switch-theme-toggle"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={({ target: { checked } }) => {
          const themeToSet = checked ? 'dark' : 'light';
          setTheme(themeToSet);
        }}
      />
      <Label htmlFor="switch-theme-toggle">
        <MoonIcon>
          <DarkModeIcon color="inherit" fontSize="small" />
        </MoonIcon>
        <SunIcon>
          <LightModeIcon color="inherit" fontSize="small" />
        </SunIcon>
        <Ball isChecked={theme === 'dark'} />
      </Label>
    </Children>
  );
}
