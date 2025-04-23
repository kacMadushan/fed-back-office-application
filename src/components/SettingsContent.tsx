import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Divider, List, Typography } from 'antd';
import { Link } from 'react-router-dom';

const ListItem = List.Item;
const Title = Typography.Title;

const SettingsContent = () => {
    return (
        <div className='py-3 px-3'>
            <Title className='title-heading5' level={5}>Account Settings</Title>
            <Divider />
            <List className='px-4'>
                <ListItem>
                    <Link to={`/user/profile`}>
                        <UserOutlined /> Profile
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={`/user/profile`}>
                        <LogoutOutlined /> Logout
                    </Link>
                </ListItem>
            </List>
        </div>
    );
};

export default SettingsContent;