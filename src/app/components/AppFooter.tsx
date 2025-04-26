import { Layout } from 'antd';

const Footer = Layout.Footer;

const AppFooter = () => {
    return (
        <Footer className='flex items-center justify-center px-5'>
            <span className='text-sm text-clr_neutral-400'>Copyright home24 back-office &copy; 2025</span>
        </Footer>
    );
};

export default AppFooter;