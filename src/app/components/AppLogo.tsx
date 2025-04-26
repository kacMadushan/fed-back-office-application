import { Flex, Typography } from 'antd';

const Title = Typography.Title;

const AppLogo = () => {
    return (
        <Flex align='center' gap={4}>
            <Title className='font-primary' level={2}>home</Title>
            <span className='bg-clr_blue-400 text-clr_white text-center text-xl py-[6px] font-light rounded-md w-10 h-10'>24</span>
        </Flex>
    );
};

export default AppLogo;