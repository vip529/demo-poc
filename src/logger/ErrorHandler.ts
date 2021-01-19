// import { SeverityLevel } from '@microsoft/applicationinsights-web';
// import { ErrorInfo } from 'react';
// import { appInsights } from './appinsight.config';

// import { ErrorBoundaryProps } from 'react-error-boundary';

export interface ErrorHandler {
  error: Error,
  info: { componentStack: string };
}

const myErrorHandler = ({ error, info }) => {
  // appInsights.trackTrace({
  //   error: new Error(error),
  //   severityLevel: SeverityLevel.Error,
  // });
  console.log(error, info);
};

export default myErrorHandler;
