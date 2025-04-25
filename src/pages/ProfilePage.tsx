import { Card, Col, Row, Typography } from 'antd';

import ProfileInfo from '../components/ProfileInfo';

const Title = Typography.Title;

const ProfilePage = () => {
    return (
        <Card>
            <Row>
                <Col xs={24} lg={24}>
                    <Title className='title-heading2' level={2}>My Profile</Title>
                    <ProfileInfo />
                </Col>
            </Row>
        </Card>
    );
};

export default ProfilePage;