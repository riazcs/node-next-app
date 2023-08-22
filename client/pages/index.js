// client/pages/index.js
import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h1>Welcome to My Auth App</h1>
      {/* <Link href="/login">Login</Link> | <Link href="/register">Register</Link> */}
    </Layout>
  );
};

export default Home;
