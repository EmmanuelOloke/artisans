import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Mulish', sans-serif`,
    body: `'Mulish', sans-serif`,
  },
  colors: {
    brand: {
      primary: '#3A66DB',
    },
  },
});

export default theme;
