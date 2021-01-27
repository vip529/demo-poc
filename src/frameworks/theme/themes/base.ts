import { Theme, createMuiTheme, ThemeOptions } from '@material-ui/core';
import { lightTheme } from './light';
import { darkTheme } from './dark';

const themeMap: { [key: string]: Theme } = {
  lightTheme: createMuiTheme(lightTheme as ThemeOptions),
  darkTheme: createMuiTheme(darkTheme as ThemeOptions),
};

export function getThemeByName(theme: string): Theme {
  return themeMap[theme];
}
