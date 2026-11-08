import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginRequest } from '../services';
import { getErrorMessage } from '../api';
import { useAuth } from '../context/AuthContext';
import ErrorMessage from '../components/ErrorMessage';
import {ui} from '../ui';

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { saveToken } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const data = await loginRequest({email, password});
            saveToken(data.token);
            navigate('/songs');
        } catch (err) {
            setError(getErrorMessage(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form onSubmit={handleSubmit} className={`${ui.form} w-full max-w-sm`}>
                <h1 className="text-2xl font-bold text-center text-gray-900">
                    Iniciar sesion
                </h1>
                <ErrorMessage message={error}/>
                <label className={ui.label}>
                    Email
                    <input type="email" required value={email}
                    onChange={(e) => setEmail(e.target.value)} className={ui.input}/>
                </label>
                <label className={ui.label}>
                    Contraseña
                    <input type="passwrod" required value={password}
                    onChange={(e)=> setPassword(e.target.value)} className={ui.input}/>
                </label>
                <button type="submit" disabled={loading} className={`${ui.btn} ${ui.primary}`}>
                    {loading ? 'Ingresando...': 'Ingresar'}
                </button>
                <p className="text-sm text-center text-gray-600">
                    ¿No tienes cuenta? <Link to="/register" className={ui.link}>
                    Registrate 
                    </Link>
                </p>
            </form>
        </div>
    )
}