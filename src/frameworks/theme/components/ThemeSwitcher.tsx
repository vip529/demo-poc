import { Box, FormControlLabel, Paper, Switch } from '@material-ui/core';
import React from 'react';
import { useTheme } from '../Provider/ThemeProvider';

const ThemeSwitcher: React.FC = () => {
  const { themeName, setThemeName } = useTheme();
  const isDarkTheme = themeName === 'darkTheme';
  const handleThemeChange = () => {
    if (!isDarkTheme) {
      setThemeName('darkTheme');
    } else {
      setThemeName('lightTheme');
    }
  };
  return (
    <Paper>
      <Box p={1}>
        <FormControlLabel control={<Switch checked={isDarkTheme} onChange={handleThemeChange} />} label='Dark Mode' />
      </Box>
    </Paper>
  );
};

export default ThemeSwitcher;
