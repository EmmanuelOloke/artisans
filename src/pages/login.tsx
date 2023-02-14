import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
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
            base: '26.5rem',
            sm: '26.5rem',
            md: '26.5rem',
            lg: '38rem',
            xl: '38rem',
            '2xl': '38rem',
          }}
        >
          <Box width="50%" backgroundColor="#3A66DB">
            Some content here
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="50%"
            backgroundColor="#FFFFFF"
          >
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

            <Text color="#949796">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>

            <InputGroup>
              <InputRightElement pointerEvents="none">
                <AtSignIcon color="gray.300" />
              </InputRightElement>
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>

            <InputGroup>
              <InputRightElement pointerEvents="none">
                <LockIcon color="gray.300" />
              </InputRightElement>
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>

            <Flex width="100%">
              <Checkbox colorScheme="blue">Remember me</Checkbox>
              <Spacer />
              <Text color="#3A66DB" fontWeight="bold">
                <Link href="/">Recover Password</Link>
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default login;
