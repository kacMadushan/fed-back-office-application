import { Layout } from 'antd';
import AppLogo from './AppLogo';
import SidebarNavigation from './SidebarNavigation';

const Sider = Layout.Sider;

const Sidebar = () => {
    return (
        <Sider className='bg-clr_blue-500 border-r border-l border-clr_neutral-200' width={260}>
            <div className='flex items-center justify-center h-16'>
                <AppLogo />
            </div>
            <SidebarNavigation />
        </Sider>
    );
};

export default Sidebar;