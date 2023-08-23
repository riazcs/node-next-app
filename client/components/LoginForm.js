// client/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(process.env.API_URL + '/login', { email, password });
            const token = response.data.token;

            // Store the token in local storage or a secure cookie
            localStorage.setItem('token', token);

            // Redirect to the dashboard or a protected route
            // Replace 'dashboard' with your actual protected route
            window.location.replace('/dashboard');
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='container text-center'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-6'>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='form-control'
                        />
                    </div>
                    <div className='col-6'>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-control'
                        />
                    </div>
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
