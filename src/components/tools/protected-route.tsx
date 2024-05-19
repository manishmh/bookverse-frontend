import React, { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';

interface ProtectedRouteProps {
    children: ReactNode;
    requiredRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push('/login');
            } else if (requiredRole && user.role !== requiredRole) {
                router.push('/');
            }
        }
    }, [user, loading]);

    if (loading || !user || (requiredRole && user.role !== requiredRole)) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
