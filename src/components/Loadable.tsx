import { Suspense } from 'react';

// eslint-disable-next-line react/display-name
const Loadable = (Component: any) => (props: any) =>
(
    <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
    </Suspense>
);

Loadable.displayName = 'Loadable';

export default Loadable;