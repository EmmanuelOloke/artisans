import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaGoogle } from 'react-icons/fa';

const LoginButton = () => {
  return (
    <Link
      href="https://github.com/emmanueloloke"
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <Button
        leftIcon={<FaGoogle />}
        color="gray"
        border="1px solid #e7e7e9"
        backgroundColor="white"
        width="25rem"
        height="3rem"
        fontWeight="bold"
        _hover={{ backgroundColor: '#e7e7e9' }}
      >
        Sign in with Google
      </Button>
    </Link>
  );
};

export default LoginButton;
