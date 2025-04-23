import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';

import App from './App';
import { blue } from './lib/utils/colors';
import { primaryFont } from './lib/utils/typography';

import './styles/globals.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <ConfigProvider theme={{
        token: {
            colorPrimary: blue[300],
            fontFamily: primaryFont,
        },
        components: {
            Typography: {
                titleMarginTop: 0,
                titleMarginBottom: 0,
            },
            Input: {
                paddingBlock: 10,
                paddingInline: 16,
                hoverBorderColor: blue[200],
                activeBorderColor: blue[200]
            }
        }
    }}>
        <App />
    </ConfigProvider>
);