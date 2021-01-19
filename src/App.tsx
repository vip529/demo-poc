import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import FormComponment from './components/FormScreen';
import MyDashboard from './components/MyDashboard';
import ErrorFallback from './logger/ErrorFallback';
import myErrorHandler from './logger/ErrorHandler';

const App: React.FC = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <MyDashboard />
        <FormComponment subject='' />
      </ErrorBoundary>
    </div>
  );
};

export default App;
