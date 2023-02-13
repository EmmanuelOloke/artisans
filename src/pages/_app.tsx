import '@/styles/globals.css';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/700.css';
import '@fontsource/mulish/900.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout';
import theme from './theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
