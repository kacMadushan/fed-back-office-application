import { Fragment } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IUserCredentials } from '../models/user.interface';

const FormItem = Form.Item;
const InputPassword = Input.Password;
const Title = Typography.Title;

const LoginForm = () => {
    const { userLogin } = useAuth();
    const navigate = useNavigate();

    const onSubmitLoginForm = async (data: IUserCredentials) => {
        try {
            await userLogin(data);
            navigate('/products', { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Fragment>
            <Title level={3}>Login</Title>
            <Form
                className='mt-4'
                layout='vertical'
                onFinish={onSubmitLoginForm}
            >
                <FormItem
                    className='mb-4 text-clr_neutral-200'
                    label='Username'
                    name='email'
                    rules={[{ required: true, message: 'Enter your email.' }]}
                >
                    <Input className='py-2' />
                </FormItem>
                <FormItem
                    className='mb-4'
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Enter your password.' }]}
                >
                    <InputPassword className='py-2' />
                </FormItem>
                <FormItem className='mb-4'>
                    <Button className='w-full py-5' type='primary' htmlType='submit'>Login</Button>
                </FormItem>
            </Form>
        </Fragment>
    );
};

export default LoginForm;
