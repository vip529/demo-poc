/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { getThemeByName } from '../themes/base';
import useLocalStorage from '../hooks/useLocalStorage';

export type ThemeContextType = {
  themeName: string;
  setThemeName: (themeName: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeName: 'lightTheme',
  setThemeName: _themeName => {},
});

const ThemeProvider: React.FC = props => {
  // const [themeName, setThemeName] = useState('lightTheme');
  const [themeName, setThemeName] = useLocalStorage('theme', 'lightTheme');
  const context = React.useMemo(() => ({ themeName, setThemeName }), [themeName, setThemeName]);
  const theme = getThemeByName(themeName);
  const { children } = props;

  return (
    <ThemeContext.Provider value={context}>
      <MuiThemeProvider theme={createMuiTheme(theme)}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
