import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';

import App from './App';
import { theme } from './lib/utils/theme';
import { AuthenticationProvider } from './providers/AuthenticationProvider';

import './styles/globals.css';

const queryClient = new QueryClient();
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
            <ConfigProvider theme={theme}>
                <App />
            </ConfigProvider>
        </AuthenticationProvider>
    </QueryClientProvider>
);