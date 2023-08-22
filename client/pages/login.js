// client/pages/login.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Layout>
      <h1>Login</h1>
      <LoginForm />
    </Layout>
  );
};

export default Login;
