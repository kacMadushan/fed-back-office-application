import { List } from 'antd';
import { LogoutOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ListItem = List.Item;

const AccountContent = () => {
    return (
        <List>
            <ListItem>
                <Link to='/profile'>
                    <ProfileOutlined /> Profile
                </Link>
            </ListItem>
            <ListItem>
                <Link to='/profile'>
                    <LogoutOutlined /> Logout
                </Link>
            </ListItem>
        </List>
    );
};

export default AccountContent;