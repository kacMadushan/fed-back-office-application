import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthentication } from '../providers/AuthenticationProvider';

// eslint-disable-next-line no-undef
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuthentication();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;
};

export default PrivateRoute;