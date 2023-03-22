import React, { useRef } from 'react';
import {
  Box,
  Text,
  Link,
  HStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navRef = useRef(null);

  return (
    <Box width="100vw" display="flex" justifyContent="center" background="transparent">
      <HStack
        w={{ base: '100%', sm: '100%', md: '100%', lg: '83%', xl: '83%', '2xl': '60%' }}
        padding={{
          base: '1rem 1rem',
          sm: '1rem 1rem',
          md: '1rem 1rem',
          lg: '2rem 0',
          xl: '2rem 0',
          '2xl': '2rem 0',
        }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Link href="http://localhost:3000" _hover={{ textDecoration: 'none' }}>
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
          </Link>
        </Box>

        <HStack gap={5}>
          <Link
            href="/login"
            _hover={{ textDecoration: 'none' }}
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
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

          <Link
            href="/signup"
            _hover={{ textDecoration: 'none' }}
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
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

          <Link
            href="http://localhost:3000"
            _hover={{ textDecoration: 'none' }}
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
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

          <Box
            ref={navRef}
            onClick={onOpen}
            display={{
              base: 'flex',
              sm: 'flex',
              md: 'flex',
              lg: 'none',
              xl: 'none',
              '2xl': 'none',
            }}
          >
            <HamburgerIcon boxSize={8} />
          </Box>
        </HStack>
      </HStack>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        initialFocusRef={navRef}
        size="full"
      >
        <DrawerOverlay />

        <DrawerContent>
          <Box>
            <DrawerHeader>
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
            </DrawerHeader>

            <DrawerCloseButton
              fontSize="1.2rem"
              marginTop={2.5}
              color="#292F2E"
              fontWeight="bold"
            />
          </Box>

          <DrawerBody display="flex" justifyContent="center" alignItems="center">
            <VStack spacing="24px">
              <Link href="/login" _hover={{ textDecoration: 'none' }}>
                <Text
                  fontSize="1.5rem"
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
              <Link href="/signup" _hover={{ textDecoration: 'none' }}>
                <Text
                  fontSize="1.5rem"
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
              <Link href="/" _hover={{ textDecoration: 'none' }}>
                <Text
                  fontSize="1.5rem"
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
