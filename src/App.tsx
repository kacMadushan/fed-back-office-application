import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AdminLayout from './components/AdminLayout';
import Loadable from './components/Loadable';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';

const ProductDetailsPage = Loadable(lazy(() => import('./pages/ProductDetailsPage')));
const ProductsPage = Loadable(lazy(() => import('./pages/ProductsPage')));
const ProfilePage = Loadable(lazy(() => import('./pages/ProfilePage')));

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <PrivateRoute>
                        <AdminLayout />
                    </PrivateRoute>
                }
            >
                <Route index path='products' element={<ProductsPage />} />
                <Route path='products/:productId' element={<ProductDetailsPage />} />
                <Route path='profile' element={<ProfilePage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;