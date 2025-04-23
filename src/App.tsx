
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AdminLayout from './components/AdminLayout';
import PrivateRoute from './components/PrivateRoute';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/admin'
                    element={
                        <PrivateRoute>
                            <AdminLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<AdminPage />} />
                    <Route path='products' element={<ProductsPage />} />
                    <Route path='profile' element={<ProfilePage />} />
                </Route>
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;