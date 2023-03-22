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
        width="25rem"
        fontWeight="bold"
        _hover={{ backgroundColor: '#82A2F7' }}
      >
        Login
      </Button>
    </Link>
  );
};

export default LoginButton;
