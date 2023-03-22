import LoginButton from '../components/LoginButton';
import GoogleSignInButton from '../components/GoogleSignInButton';
import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function login() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        borderRadius={15}
        width={{
          base: '22.875rem',
          sm: '22.875rem',
          md: '22.875rem',
          lg: '75rem',
          xl: '75rem',
          '2xl': '75rem',
        }}
        overflow="hidden"
      >
        <Flex
          height={{
            base: '40rem',
            sm: '40rem',
            md: '40rem',
            lg: '38rem',
            xl: '38rem',
            '2xl': '38rem',
          }}
        >
          <Box
            width="50%"
            backgroundColor="#FFFFFF"
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Image src="./images/trade.gif" alt="people trading gif" width="23rem" />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width={{ base: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%', '2xl': '50%' }}
            backgroundColor={{
              base: '#FFFFFF',
              sm: '#FFFFFF',
              md: '#FFFFFF',
              lg: '#F0F3F9',
              xl: '#F0F3F9',
              '2xl': '#F0F3F9',
            }}
            gap="4rem"
          >
            <Flex
              flexDirection="column"
              gap={10}
              textAlign="center"
              width={{
                base: '90%',
                sm: '90%',
                md: '90%',
                lg: '25rem',
                xl: '25rem',
                '2xl': '25rem',
              }}
              marginTop="5rem"
            >
              <VStack>
                <Text
                  fontWeight="extrabold"
                  fontSize={{
                    base: '1.5rem',
                    sm: '1.5rem',
                    md: '1.5rem',
                    lg: '2rem',
                    xl: '2rem',
                    '2xl': '2rem',
                  }}
                  color="#3A66DB"
                >
                  Artisans
                </Text>

                <Text color="#949796">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                  blanditiis.
                </Text>
              </VStack>

              <VStack gap={3}>
                <InputGroup>
                  <InputRightElement pointerEvents="none">
                    <AtSignIcon color="gray.300" />
                  </InputRightElement>
                  <Input type="tel" placeholder="Email" />
                </InputGroup>

                <InputGroup>
                  <InputRightElement pointerEvents="none">
                    <LockIcon color="gray.300" />
                  </InputRightElement>
                  <Input type="tel" placeholder="Password" />
                </InputGroup>

                <Flex width="100%">
                  <Checkbox colorScheme="blue">Remember me</Checkbox>
                  <Spacer />
                  <Text color="#3A66DB" fontWeight="bold" _hover={{ color: '#82A2F7' }}>
                    <Link href="/">Recover Password</Link>
                  </Text>
                </Flex>
              </VStack>

              <VStack>
                <LoginButton />
                <GoogleSignInButton />
              </VStack>
            </Flex>

            <Box color="#949796" display="flex" gap="0.7rem">
              Don&apos;t have an account yet?{' '}
              <Link href="/signup">
                <Text color="#3A66DB" fontWeight="bold" _hover={{ color: '#82A2F7' }}>
                  Sign up
                </Text>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default login;
