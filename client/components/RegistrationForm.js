import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(process.env.API_URL + '/register', { username, password, email, address });
            setSuccess('User registered successfully');
            window.location.replace('/login');
        } catch (error) {
            setError('Registration failed');
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-6 my-3'>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='form-control'
                        />
                    </div>
                    <div className='col-6 my-3'>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='form-control'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
                <button type="submit" className='btn btn-sm btn-secondary mt-3'>Register</button>
                {success && <p>{success}</p>}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default RegisterForm;
