import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Layout, Popover, Space } from 'antd';

import SettingsContent from './SettingsContent';

const Header = Layout.Header;


const TopMenu = () => {
    return (
        <Header className='bg-white border-b border-gray-200 flex items-center justify-end gap-x-2'>
            <Avatar className='bg-orage text-white' size={38} icon={<UserOutlined />} />
            <Popover placement='bottomRight' content={<SettingsContent />}>
                <Space>
                    <span className='text-base text-black font-light'>Admin User</span>
                    <DownOutlined />
                </Space>
            </Popover>
        </Header>
    );
};

export default TopMenu;