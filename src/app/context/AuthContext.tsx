import { createContext, useState, useEffect, useContext, useMemo, type ReactNode } from 'react';
import { IUser, IUserCredentials } from '../models/user.interface';
import { user_data, user_email, user_password } from '../utils/data/user';

interface IAuthContext {
    user: IUser | null;
    isAuthenticated: boolean;
    userLogin: (credentials: IUserCredentials) => Promise<void>;
    userLogout: () => void;
}

const mock_user_data: IUser = user_data;

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const userLogin = async (credentials: IUserCredentials): Promise<void> => {
        return new Promise((resolve, reject) => {
            if (credentials.email === user_email && credentials.password === user_password) {
                setUser(mock_user_data);
                setIsAuthenticated(true);
                localStorage.setItem('user', JSON.stringify(mock_user_data));
                resolve();
            } else {
                reject(new Error('Email Or Password Invalid'))
            }
        })
    };

    const userLogout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const saveToUserLocalStorage = localStorage.getItem('user');
        if (saveToUserLocalStorage) {
            setUser(JSON.parse(saveToUserLocalStorage));
            setIsAuthenticated(true);
        }
    }, []);

    const value = { user, isAuthenticated, userLogin, userLogout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthentication must be used withing an AuthenticationProvider')
    }
    return context;
};