import React from 'react';
import { Button, Link } from '@chakra-ui/react';

const LoginButton = () => {
  return (
    <Link
      href="https://github.com/emmanueloloke"
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <Button
        color="#FFFFFF"
        backgroundColor="#3A66DB"
        width={{
          base: '20.5rem',
          sm: '20.5rem',
          md: '20.5rem',
          lg: '25rem',
          xl: '25rem',
          '2xl': '25rem',
        }}
        height="3rem"
        fontWeight="bold"
        _hover={{ backgroundColor: '#82A2F7' }}
      >
        Login
      </Button>
    </Link>
  );
};

export default LoginButton;
