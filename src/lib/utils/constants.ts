import { IUser } from '../models/user.interface';

export const Login_VALIDATION = {
    email: 'Please enter your email',
    password: 'Please enter your password',
    error: 'Email Or Password Invalid'
}

export const USER_NAME = 'Admin User';
export const USER_EMAIL = 'admin@domain.com';
export const USER_PASSWORD = 'admin@123';

export const MOCK_USER_DATA: IUser = {
    id: 1,
    email: USER_EMAIL,
    name: USER_NAME,
};