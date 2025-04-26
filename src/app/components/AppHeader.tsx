import { Layout, Popover, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import UserAvatar from './UserAvatar';
import AccountContent from './AccountContent';

const Header = Layout.Header;

const AppHeader = () => {
    return (
        <Header className='bg-clr_white flex items-center justify-end gap-x-2 px-5'>
            <UserAvatar />
            <Popover placement='bottomRight' title='My Account' content={<AccountContent />}>
                <Space>
                    <span className='text-sm text-clr_neutral-400'>Admin User</span>
                    <DownOutlined className='text-clr_neutral-400' />
                </Space>
            </Popover>
        </Header>
    );
};

export default AppHeader;