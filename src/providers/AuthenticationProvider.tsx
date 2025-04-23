import {
    createContext,
    type ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';

import { IUser, IUserCredentials } from '../lib/models/user.interface';
import { MOCK_USER_DATA, USER_EMAIL, USER_PASSWORD } from '../lib/utils/constants';

interface IAuthenticationContext {
    user: IUser | null;
    isAuthenticated: boolean;
    userLogin: (credentials: IUserCredentials) => Promise<void>;
    userLogout: () => void;
}

const AuthenticationContext = createContext<IAuthenticationContext | undefined>(undefined);

export const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const saveToUserLocalStorage = localStorage.getItem('user');
        if (saveToUserLocalStorage) {
            setUser(JSON.parse(saveToUserLocalStorage));
            setIsAuthenticated(true);
        }
    }, []);

    const userLogin = async (credentials: IUserCredentials): Promise<void> => {
        return new Promise((resolve, reject) => {
            if (credentials.email === USER_EMAIL && credentials.password === USER_PASSWORD) {
                setUser(MOCK_USER_DATA);
                setIsAuthenticated(true);
                localStorage.setItem('user', JSON.stringify(MOCK_USER_DATA));
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

    const value = { user, isAuthenticated, userLogin, userLogout };
    return (
        <AuthenticationContext.Provider value={value}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export const useAuthentication = () => {
    const context = useContext(AuthenticationContext);
    if (context === undefined) {
        throw new Error('useAuthentication must be used withing an AuthenticationProvider')
    }
    return context;
}