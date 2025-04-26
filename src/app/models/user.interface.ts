export interface IUser {
    id: number;
    email: string;
    name?: string;
}

export interface IUserCredentials {
    email: string;
    password: string;
}