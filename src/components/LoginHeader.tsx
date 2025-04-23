import { Typography } from 'antd';

import Logo from './Logo';

const { Text } = Typography;

const LoginHeader = () => {
    return (
        <div className='mb-5 flex flex-col items-center justify-center'>
            <Logo />
            <Text className='text-gray-500 text-sm font-light'>Please sign in to continue.</Text>
        </div>
    );
};

export default LoginHeader;