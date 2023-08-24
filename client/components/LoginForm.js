import React, { useState } from 'react';
import api from "service/api";
import styles from '../public/css/custom.module.css';
import { useRouter } from 'next/router';

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            router.push('/dashboard');
        } catch (error) {
            setError('Invalid username or password');
        }
    };


    const containerStyle = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '600px',
        margin: '160px auto',
    };

    return (
        <div className='text-center' style={containerStyle}>
            <form onSubmit={handleSubmit}>
                <div className='col-8 mt-3'>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div className='col-8 mt-4'>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div className='float-right mt-3'>
                    <button className="btn btn-sm btn-secondary" type="submit">Login</button>
                    {error && <p>{error}</p>}
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
