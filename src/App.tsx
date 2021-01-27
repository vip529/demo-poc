import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import FormComponment from './components/FormScreen';
import LanguageSelector from './frameworks/internationalization/components/LanguageSelector';
// import MyDashboard from './components/MyDashboard';
import ThemeSwitcher from './frameworks/theme/components/ThemeSwitcher';
import ErrorFallback from './logger/ErrorFallback';
import myErrorHandler from './logger/ErrorHandler';
import ThemeProvider from './frameworks/theme/Provider/ThemeProvider';
import Login from './components/authentication/Login';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ThemeSwitcher />
      <LanguageSelector />

      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <Login />
        <FormComponment />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
