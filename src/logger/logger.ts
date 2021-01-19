import { useTrackMetric } from '@microsoft/applicationinsights-react-js';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { appInsights, reactPlugin } from './appinsight.config';

// Centralized log handler. Can plug any third party remote logging service here.

const logger = (() => {
  // use to log warnings
  const logWarning = (message: string) => {
    appInsights.trackTrace({
      severityLevel: SeverityLevel.Warning,
      message,
    });
  };
  // use to log information
  const logInfo = (message: string, properties: { [key: string]: any }) => {
    appInsights.trackTrace({
      severityLevel: SeverityLevel.Information,
      message,
      properties,
    });
  };
  // use to log errors
  const logError = (error: Error) => {
    appInsights.trackException({
      severityLevel: SeverityLevel.Error,
      exception: error,
    });
  };
  // use to log application interaction/events
  const logAppEvent = (name: string, properties?: { [key: string]: any }) => {
    appInsights.trackEvent({
      name,
      properties,
    });
  };
  // use to log custom app metrics
  const logAppMetric = (name: string) => {
    const trackComponent = useTrackMetric(reactPlugin, name);
    return trackComponent;
  };
  return { logWarning, logInfo, logError, logAppEvent, logAppMetric };
})();

export default logger;
