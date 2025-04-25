import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Layout, Popover, Space } from 'antd';

import { useAuthentication } from '../providers/AuthenticationProvider';
import SettingsContent from './SettingsContent';

const Header = Layout.Header;

const TopMenu = () => {
    const { user } = useAuthentication();
    return (
        <Header className='bg-white border-b border-gray-200 flex items-center justify-end gap-x-2'>
            <Avatar className='bg-orage text-white' size={38} icon={<UserOutlined />} />
            <Popover placement='bottomRight' content={<SettingsContent />}>
                <Space>
                    <span className='text-sm text-black font-normal'>{user?.name}</span>
                    <DownOutlined />
                </Space>
            </Popover>
        </Header>
    );
};

export default TopMenu;