import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../services';
import { getErrorMessage } from '../api';
import type { RegisterRequest } from '../types';
import ErrorMessage from '../components/ErrorMessage';
import {ui} from '../ui';

const fields = [ 
    { name: 'name', label: 'Nombre', type: 'text'},
    { name: 'email', label: 'Email', type: 'text'},
    { name: 'password', label: 'Contraseña', type: 'password'},
]

export default function LoginPage(){
    const [form, setForm] = useState<RegisterRequest>({name: '', email: ''});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
}