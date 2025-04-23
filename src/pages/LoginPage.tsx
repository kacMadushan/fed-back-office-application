import { Card, Col, Row } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import LoginHeader from '../components/LoginHeader';
import { useAuthentication } from '../providers/AuthenticationProvider';

const LoginPage = () => {
    const { isAuthenticated } = useAuthentication();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin/products', { replace: true })
        }
    }, [isAuthenticated, navigate]);

    return (
        <Row className='min-h-screen' align='middle' justify='center'>
            <Col xs={24} lg={6}>
                <Card className='px-5 py-5'>
                    <LoginHeader />
                    <LoginForm />
                </Card>
            </Col>
        </Row>
    );
};

export default LoginPage;