import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loadable from '../components/Loadable';
import AppLayout from '../components/AppLayout';
import PrivateRoute from './PrivateRoute';

const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')));
const ProductsPage = Loadable(lazy(() => import('../pages/ProductsPage')));
const ProductDetailsPage = Loadable(lazy(() => import('../pages/ProductDetailsPage')));
const ProfilePage = Loadable(lazy(() => import('../pages/ProfilePage')));

const AppRouter = () => {
    const renderAppLayout = (
        <PrivateRoute>
            <AppLayout />
        </PrivateRoute>
    )
    return (
        <Routes>
            <Route path='/' element={renderAppLayout}>
                <Route path='products' element={<ProductsPage />} />
                <Route path='products/:productId' element={<ProductDetailsPage />} />
                <Route path='profile' element={<ProfilePage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    );
};

export default AppRouter;