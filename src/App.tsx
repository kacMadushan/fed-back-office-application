import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

const App = () => {
    return (
        <BrowserRouter>
            <div className='w-full px-3 lg:px-6'>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;