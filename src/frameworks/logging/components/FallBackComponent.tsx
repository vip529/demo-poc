import { FallbackProps } from 'react-error-boundary';

export type IFallbackComponentProps = FallbackProps;

// Fallback component. To be rendered when Error-Boundary catch error in descendant components

const FallbackComponent: React.FC<IFallbackComponentProps> = ({ error }: IFallbackComponentProps) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
    </div>
  );
};

export default FallbackComponent;
