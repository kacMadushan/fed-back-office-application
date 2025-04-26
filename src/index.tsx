import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { AuthProvider } from './app/context/AuthContext';
import { primaryFontFamily } from './app/utils/typography';
import { clr_blue, clr_neutral } from './app/utils/colors';
import App from './app/App';

import './styles/globals.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <AuthProvider>
        <ConfigProvider theme={{
            token: {
                colorPrimary: clr_blue[500],
                fontFamily: primaryFontFamily
            },
            components: {
                Typography: {
                    titleMarginBottom: 0,
                    titleMarginTop: 0,
                    colorTextHeading: clr_neutral[500],
                    fontWeightStrong: 700
                },
                Table: {
                    headerBg: clr_neutral[100],
                    headerColor: clr_neutral[500],
                    fontWeightStrong: 600
                },
                Form: {
                    labelColor: clr_neutral[500]
                },
                Input: {
                    colorBorder: clr_neutral[300],
                    hoverBorderColor: clr_blue[400],
                    activeBorderColor: clr_blue[400]
                },
                Button: {
                    colorPrimary: clr_blue[500],
                    colorPrimaryHover: clr_blue[400]
                },
                Menu: {
                    darkItemBg: clr_blue[500],
                    darkItemHoverBg: clr_blue[400],
                    darkItemSelectedBg: clr_blue[400],
                    darkSubMenuItemBg: clr_blue[500]
                }
            },
        }}>
            <App />
        </ConfigProvider>
    </AuthProvider>
);