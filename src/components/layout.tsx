import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      height="100vh"
      width="100vw"
      background="url('../../images/landing-bg.svg') no-repeat"
      backgroundSize="cover"
    >
      <NavBar />
      <main>{children}</main>
    </Box>
  );
}
