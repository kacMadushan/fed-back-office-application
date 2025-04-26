import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Sidebar from './Sidebar';

const Content = Layout.Content;

const AppLayout = () => {
    return (
        <Layout className='min-h-screen'>
            <Sidebar />
            <Layout>
                <AppHeader />
                <Content className='px-4 py-4'>
                    <Outlet />
                </Content>
                <AppFooter />
            </Layout>
        </Layout>
    );
};

export default AppLayout;