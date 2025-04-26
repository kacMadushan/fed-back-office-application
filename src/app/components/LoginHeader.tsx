import { Flex, Typography } from 'antd';

import AppLogo from './AppLogo';

const Text = Typography.Text;

const LoginHeader = () => {
    return (
        <Flex className='mb-4 border-b border-clr_neutral-200 pb-3' vertical align='center'>
            <AppLogo />
            <Text className='text-clr_neutral-400'>Please login to contiune.</Text>
        </Flex>
    );
};

export default LoginHeader;