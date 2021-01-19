import React, { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import logger from '../logger/logger';

export interface MyData {
  Image: string;
  name: string;
  id: string;
}

const MyDashboard: React.FC = () => {
  const handleError = useErrorHandler();
  logger.logAppEvent('mounted', { name: 'Dashboard' });
  logger.logAppMetric('MyDashboard');
  const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';
  const [data, setData] = useState([] as MyData[]);
  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        setData(JSON.parse(JSON.stringify(res)));
      })
      .catch(error => {
        handleError(error);
      });
  }, []);

  return (
    <div>
      <div>MyDashboard</div>
      {data &&
        data.map(value => {
          return <div>{value.name}</div>;
        })}
    </div>
  );
};

export default MyDashboard;
