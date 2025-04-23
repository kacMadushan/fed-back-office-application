import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';

import App from './App';
import { theme } from './lib/utils/theme';
import { AuthenticationProvider } from './providers/AuthenticationProvider';

import './styles/globals.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <AuthenticationProvider>
        <ConfigProvider theme={theme}>
            <App />
        </ConfigProvider>
    </AuthenticationProvider>
);