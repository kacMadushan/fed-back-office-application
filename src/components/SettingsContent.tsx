import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, List, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { useAuthentication } from '../providers/AuthenticationProvider';
const ListItem = List.Item;
const Title = Typography.Title;

const SettingsContent = () => {
    const { userLogout } = useAuthentication();
    return (
        <div className='py-3 px-3'>
            <Title className='title-heading5' level={5}>Account Settings</Title>
            <Divider />
            <List className='px-4'>
                <ListItem>
                    <Link to='/admin/profile'>
                        <UserOutlined /> Profile
                    </Link>
                </ListItem>
                <ListItem>
                    <Button onClick={userLogout}><LogoutOutlined /> Logout</Button>
                </ListItem>
            </List>
        </div>
    );
};

export default SettingsContent;