import { Layout } from 'antd';

import LeftMenuContent from './LeftMenuContent';
import Logo from './Logo';

const Sidebar = Layout.Sider;

const LeftMenu = () => {
    return (
        <Sidebar className='bg-white border-r border-gray-200' width={260}>
            <Logo />
            <LeftMenuContent />
        </Sidebar>
    );
};

export default LeftMenu;