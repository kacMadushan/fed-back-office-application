import { Button, Form, Input, Typography } from 'antd';
import { Fragment } from 'react';

import { IUserCredentials } from '../lib/models/user.interface';

const Title = Typography.Title;
const FormItem = Form.Item;
const InputPassword = Input.Password;

const LoginForm = () => {

    const onSubmitLogin = (data: IUserCredentials) => {
        console.log(data);
    };

    return (
        <Fragment>
            <Title className='title-heading2' level={2}>Login</Title>
            <Form className='mt-4' layout='vertical' onFinish={onSubmitLogin}>
                <FormItem
                    className='mb-4'
                    label='Email Or Username'
                    name='email'
                    rules={[{ required: true, message: 'Please enter your email' }]}
                >
                    <Input />
                </FormItem>
                <FormItem
                    className='mb-4'
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please enter your password' }]}
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