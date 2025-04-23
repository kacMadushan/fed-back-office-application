import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import LeftMenu from './LeftMenu';
import TopMenu from './TopMenu';

const MainContent = Layout.Content;

const AdminLayout = () => {
    return (
        <Layout className='min-h-screen'>
            <LeftMenu />
            <Layout>
                <TopMenu />
                <MainContent className='py-10 px-10'>
                    <Outlet />
                </MainContent>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;