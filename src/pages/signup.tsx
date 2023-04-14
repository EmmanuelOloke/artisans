import {
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
  Button,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';
import axios from 'axios';
import React, { FormEventHandler, useState } from 'react';

const Signup = () => {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async () => {
    try {
      const userData = {
        email,
        fullName,
        password,
        phoneNumber,
        address,
        country,
        gender,
        profileImage,
        bio,
      };

      const response = await axios.post('/api/auth/signup', userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center>
      <VStack mb={10}>
        <Stack
          w={{ base: '90%', lg: '35rem' }}
          borderRadius={5}
          background="#FFFFFF"
          padding="35px 35px 30px"
          mb={3}
          spacing="6"
        >
          <Heading
            size={{ base: 'sm', lg: 'md' }}
            textTransform="uppercase"
            textAlign="center"
            color={theme.colors.brand.primary}
            fontWeight="800"
          >
            Create Account
          </Heading>

          <form>
            <Stack spacing={6}>
              <FormControl>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event?.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="fullName">Full Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(event) => setFullName(event?.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event?.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event?.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event?.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="address">Address</FormLabel>
                <Input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(event) => setAddress(event?.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="country">Country</FormLabel>
                <Input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(event) => setCountry(event?.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="gender">Gender</FormLabel>
                <RadioGroup name="gender" onChange={setGender} value={gender}>
                  <Stack direction="row" spacing="8">
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="profileImage">Profile Image</FormLabel>
                <Input
                  type="file"
                  border="none"
                  _hover={{ cursor: 'pointer' }}
                  value={profileImage}
                  onChange={(event) => setProfileImage(event?.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="bio">Bio</FormLabel>
                <Textarea
                  placeholder="Some information about you abd your art"
                  value={bio}
                  onChange={(event) => setBio(event?.target.value)}
                ></Textarea>
              </FormControl>

              <Button
                bg={theme.colors.brand.primary}
                height="3rem"
                color="#FFFFFF"
                fontWeight="700"
                _hover={{ bgColor: '#82A2F7' }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
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
