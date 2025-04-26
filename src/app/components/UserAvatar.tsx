import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserAvatar = () => {
    return (
        <Avatar
            className='bg-clr_blue-500 text-clr_white'
            shape='square'
            size={34}
            icon={<UserOutlined />}
        />
    );
};

export default UserAvatar;