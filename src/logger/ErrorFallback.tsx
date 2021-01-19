import { FallbackProps } from 'react-error-boundary';

export type IErrorFallbackProps = FallbackProps;

// Fallback component. To be rendered when Error-Boundary catch error in descendant components

const ErrorFallback: React.FC<IErrorFallbackProps> = ({ error }: IErrorFallbackProps) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
    </div>
  );
};

export default ErrorFallback;
