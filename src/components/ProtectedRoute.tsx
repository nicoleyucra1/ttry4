import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';

export default function ProtectedRoute(){
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return (
        <div className="min-f-screen bg-gray-50">
            <Navbar/>
            <main className="max-w-6xl mx-auto px=6 py-8">
                <Outlet/>
            </main>
        </div>
    );
}