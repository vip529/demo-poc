import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from 'history';

const createTelemetryService = () => {
  const browserHistory = createBrowserHistory();
  const reactPlugin = new ReactPlugin();
  const appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: process.env.REACT_APP_APPINSIGHTS_KEY,
      maxBatchSizeInBytes: 10000, // Max size of telemetry batch. If a batch exceeds this limit, it is immediately sent and a new batch is started
      maxBatchInterval: 15000, // How long to batch telemetry for before sending (milliseconds)
      extensions: [reactPlugin],
      extensionConfig: {
        [reactPlugin.identifier]: { history: browserHistory },
      },
    },
  });
  appInsights.loadAppInsights();
  return { reactPlugin, appInsights };
};

export const { appInsights, reactPlugin } = createTelemetryService();
