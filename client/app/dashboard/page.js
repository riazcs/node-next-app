// client/pages/dashboard.js
import { Box, ChakraProvider, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';

const Page = () => {
  return (
    <ChakraProvider>
      <Layout>
        <Container p={6} boxShadow="md" rounded="lg">
          <Heading as="h1" mb={4}>
            Dashboard
          </Heading>
          <Box>
            <Text>Welcome to your dashboard!</Text>
          </Box>
        </Container>
      </Layout>
    </ChakraProvider>
  );
};

export default Page;
