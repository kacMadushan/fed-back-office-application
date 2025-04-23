import { Card, Col, Row } from 'antd';

import LoginForm from '../components/LoginForm';
import LoginHeader from '../components/LoginHeader';

const LoginPage = () => {
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