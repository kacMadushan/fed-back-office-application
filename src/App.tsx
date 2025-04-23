import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Admin from './components/Admin';
import LoginPage from './pages/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Admin />}>
                    <Route path='products' element={<ProductsPage />} />
                    <Route path='products/:productId' element={<ProductDetailsPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                </Route>
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;