import { FallbackProps } from 'react-error-boundary';

export type IErrorFallbackProps = FallbackProps;

const ErrorFallback: React.FC<IErrorFallbackProps> = ({ error, componentStack }: IErrorFallbackProps) => {
    return (
        <div>
            <p>Something went wrong:</p>
            <pre>{error?.message}</pre>
            <pre>{componentStack}</pre>
        </div>
    );
};

export default ErrorFallback;
