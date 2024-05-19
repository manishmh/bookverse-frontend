import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { backendBaseUrl } from '@/constant';

interface User {
    userId: string;
    email: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const validateUser = async () => {
            try {
                const { data } = await axios.get(`${backendBaseUrl}/validate`, { withCredentials: true });
                setUser(data.user);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        validateUser();
    }, []);

    const login = async (email: string, password: string) => {
        const { data } = await axios.post(`${backendBaseUrl}/login`, { email, password });
        setUser(data.user);
        router.push('/');
    };

    const logout = async () => {
        await axios.post(`${backendBaseUrl}/logout`, {}, { withCredentials: true });
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
