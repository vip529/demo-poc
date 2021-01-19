import { useTrackMetric } from '@microsoft/applicationinsights-react-js';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { appInsights, reactPlugin } from './appinsight.config';

// Utility function to  return a numerical equivalent of LogLevels

const getLogLevel = () => {
  const logLevel = process.env.REACT_APP_LOG_LEVEL;
  if (logLevel === 'info') {
    return 2;
  }
  if (logLevel === 'warn') {
    return 3;
  }
  if (logLevel === 'error') {
    return 4;
  }
  if (logLevel === 'silent') {
    return 5;
  }
  return 1;
};

// Centralized log handler. Can plug any third party remote logging service here.

const logger = (() => {
  const logLevel = getLogLevel();

  // use to log information
  const logInfo = (message: string, properties: { [key: string]: any }) => {
    if (logLevel <= 2) {
      appInsights.trackTrace({
        severityLevel: SeverityLevel.Information,
        message,
        properties,
      });
    }
  };

  // use to log warnings
  const logWarning = (message: string) => {
    if (logLevel <= 3) {
      appInsights.trackTrace({
        severityLevel: SeverityLevel.Warning,
        message,
      });
    }
  };

  // use to log errors
  const logError = (error: Error) => {
    if (logLevel <= 4) {
      appInsights.trackException({
        severityLevel: SeverityLevel.Error,
        exception: error,
      });
    }
  };

  // use to log application interaction/events
  const logAppEvent = (name: string, properties?: { [key: string]: any }) => {
    if (logLevel <= 5) {
      appInsights.trackEvent({
        name,
        properties,
      });
    }
  };

  // use to log custom app metrics
  const logAppMetric = (name: string) => {
    const trackComponent = useTrackMetric(reactPlugin, name);
    return trackComponent;
  };
  return { logWarning, logInfo, logError, logAppEvent, logAppMetric };
})();

export default logger;
