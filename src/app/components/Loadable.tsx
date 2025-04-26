import { ComponentType, ReactElement, Suspense } from 'react';
import Spinner from './Spinner';


const Loadable = <T extends object>(Component: ComponentType<T>) =>
    (props: T): ReactElement =>
    (
        <Suspense fallback={<Spinner />}>
            <Component {...props} />
        </Suspense>
    );

export default Loadable;