import { Box } from '@chakra-ui/react';
import React from 'react';

function login() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        width={{
          base: '22.875rem',
          sm: '22.875rem',
          md: '22.875rem',
          lg: '75rem',
          xl: '75rem',
          '2xl': '75rem',
        }}
        backgroundColor="#3A66DB"
      >
        This is login!!!
      </Box>
    </Box>
  );
}

export default login;
