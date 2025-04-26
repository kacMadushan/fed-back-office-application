import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card } from 'antd';

import { useAuth } from '../context/AuthContext';
import LoginHeader from '../components/LoginHeader';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/products')
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className='px-4'>
            <Row className='min-h-screen' align='middle' justify='center'>
                <Col xs={24} lg={6}>
                    <Card className='p-5'>
                        <LoginHeader />
                        <LoginForm />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;