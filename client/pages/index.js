// client/pages/index.js
import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import LoginForm from '@/components/LoginForm';

const Home = () => {
  return (
    // <Layout>
    //   <h1>Welcome to My Auth App</h1>
    // </Layout>
    <LoginForm />
  );
};

export default Home;
