import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  Center,
  VStack,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
  const theme = useTheme();

  return (
    <Center>
      <VStack mb={10}>
        <Stack
          width="35rem"
          borderRadius={5}
          background="#FFFFFF"
          padding="35px 35px 30px"
          mb={3}
          spacing="6"
        >
          <Heading size="md" textTransform="uppercase" textAlign="center">
            Create Account
          </Heading>

          <form>
            <Stack spacing={6}>
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" placeholder="Email" />
              </FormControl>

              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="Full Name" />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter Password" />
              </FormControl>

              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" placeholder="Confirm Password" />
              </FormControl>

              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input type="tel" placeholder="Phone Number" />
              </FormControl>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="Address" />
              </FormControl>

              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input type="text" placeholder="Country" />
              </FormControl>

              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Input type="text" placeholder="Gender" />
              </FormControl>

              <FormControl>
                <FormLabel>Profile Image</FormLabel>
                <Input type="file" border="none" _hover={{ cursor: 'pointer' }} />
              </FormControl>

              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Textarea placeholder="Some information about you abd your art"></Textarea>
              </FormControl>
            </Stack>
          </form>
        </Stack>

        <Text>
          Already have an account?{' '}
          <Link href="/login" color={theme.colors.brand.primary} fontWeight="bold">
            Login
          </Link>
        </Text>
      </VStack>
    </Center>
  );
};

export default Signup;
