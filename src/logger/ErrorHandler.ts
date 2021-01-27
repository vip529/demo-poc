// import logger from './LogHandler';

type ErrorHandler = (error: Error, info: { componentStack: string }) => void;

// Handler function to handle error caught by Error-Boundary. Here , we can send errors to logging service

const myErrorHandler: ErrorHandler = (error, info) => {
  console.log('gotcha');
  console.log(error, info.componentStack);
  // logger.logError(error);
};

export default myErrorHandler;
