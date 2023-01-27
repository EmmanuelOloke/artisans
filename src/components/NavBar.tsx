import React from 'react';
import { Box, Text, Link, HStack } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box width="100vw" display="flex" justifyContent="center">
      <HStack
        w={{ base: '100%', sm: '100%', md: '100%', lg: '80%', xl: '80%', '2xl': '60%' }}
        padding="2rem 0"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Link href="http://localhost:3000" _hover={{ textDecoration: 'none' }}>
            <Text
              fontWeight="extrabold"
              fontSize={{
                base: '1rem',
                sm: '1rem',
                md: '1rem',
                lg: '2rem',
                xl: '2rem',
                '2xl': '2rem',
              }}
              color="#3A66DB"
            >
              Artisans
            </Text>
          </Link>
        </Box>

        <HStack display="flex" gap={5}>
          <Link href="http://localhost:3000" _hover={{ textDecoration: 'none' }}>
            <Text
              fontSize="1rem"
              fontWeight="bold"
              transition="all .4s"
              _hover={{
                color: '#3A66DB',
                borderBottom: '2px solid #3A66DB',
                marginBottom: '-2px',
              }}
            >
              Log In
            </Text>
          </Link>

          <Link href="http://localhost:3000" _hover={{ textDecoration: 'none' }}>
            <Text
              fontSize="1rem"
              fontWeight="bold"
              transition="all .4s"
              _hover={{
                color: '#3A66DB',
                borderBottom: '2px solid #3A66DB',
                marginBottom: '-2px',
              }}
            >
              Sign Up
            </Text>
          </Link>

          <Link href="http://localhost:3000" _hover={{ textDecoration: 'none' }}>
            <Text
              fontSize="1rem"
              fontWeight="bold"
              transition="all .4s"
              _hover={{
                color: '#3A66DB',
                borderBottom: '2px solid #3A66DB',
                marginBottom: '-2px',
              }}
            >
              How it works
            </Text>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
