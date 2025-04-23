import { Typography } from 'antd';

const Title = Typography.Title;

const Logo = () => {
    return (
        <div className='flex items-center justify-center gap-x-1'>
            <Title className='logo-title' level={1}>home</Title>
            <span className='logo-circle'>24</span>
        </div>
    );
};

export default Logo;