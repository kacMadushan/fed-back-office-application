import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Typography } from 'antd';

import { useAuthentication } from '../providers/AuthenticationProvider';

const Title = Typography.Title;

const ProfileInfo = () => {
    const { user } = useAuthentication();
    return (
        <div className='flex flex-col  gap-y-3 border border-clr_zinc-200 rounded-t-lg mt-4'>
            <div className='bg-clr_zinc-100 rounded-t-lg h-40 w-full relative'>
                <Avatar className='bg-clr_zinc-800 text-clr_zinc-100 absolute top-20 left-20' size={128} icon={<UserOutlined />} />
            </div>
            <div className='relative ml-20 mt-12 mb-14'>
                <Title className='title-heading4' level={3}>{user?.name}</Title>
                <span className='text-clr_zinc-600 text-sm font-normal'>{user?.email}</span>
            </div>
        </div>
    );
};

export default ProfileInfo;