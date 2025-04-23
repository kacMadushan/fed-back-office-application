import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import LeftMenu from './LeftMenu';
import TopMenu from './TopMenu';

const MainContent = Layout.Content;

const Admin = () => {
    return (
        <Layout className='min-h-screen'>
            <LeftMenu />
            <Layout>
                <TopMenu />
                <MainContent>
                    <Outlet />
                </MainContent>
            </Layout>
        </Layout>
    );
};

export default Admin;