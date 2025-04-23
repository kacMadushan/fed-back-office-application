import { Button, Form, Input, Typography } from 'antd';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMessageView } from '../hooks/useMessageView';
import { IUserCredentials } from '../lib/models/user.interface';
import { Login_VALIDATION } from '../lib/utils/constants';
import { useAuthentication } from '../providers/AuthenticationProvider';

const Title = Typography.Title;
const FormItem = Form.Item;
const InputPassword = Input.Password;

const LoginForm = () => {
    const { openMessageView, messageContext } = useMessageView({ messageType: 'error', content: Login_VALIDATION.error });
    const { userLogin } = useAuthentication();
    const navigate = useNavigate();

    const onSubmitLogin = async (data: IUserCredentials) => {
        try {
            await userLogin(data);
            navigate('/products', { replace: true });
        } catch (error) {
            openMessageView();
        }
    };

    return (
        <Fragment>
            {messageContext}
            <Title className='title-heading2' level={2}>Login</Title>
            <Form className='mt-4' layout='vertical' onFinish={onSubmitLogin}>
                <FormItem
                    className='mb-4'
                    label='Email Or Username'
                    name='email'
                    rules={[{ required: true, message: Login_VALIDATION.email }]}
                >
                    <Input />
                </FormItem>
                <FormItem
                    className='mb-4'
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: Login_VALIDATION.password }]}
                >
                    <InputPassword />
                </FormItem>
                <FormItem className='mt-6 mb-0' label={null}>
                    <Button className='btn-primary w-full' type='primary' htmlType='submit'>Login</Button>
                </FormItem>
            </Form>
        </Fragment>
    );
};

export default LoginForm;