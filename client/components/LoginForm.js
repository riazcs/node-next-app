// client/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(process.env.API_URL +'/login', { username, password });
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;
