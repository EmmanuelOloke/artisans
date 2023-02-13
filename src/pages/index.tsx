import Head from 'next/head';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Artisans</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <div>Hero section goes here</div>
      </Box>
    </>
  );
}
