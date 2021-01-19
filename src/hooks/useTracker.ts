import { useTrackMetric } from '@microsoft/applicationinsights-react-js';
import { reactPlugin } from '../logger/appinsight.config';

const useTracker = (message: string) => {
  const trackComponent = useTrackMetric(reactPlugin, message);
  return trackComponent;
};

export default useTracker;
