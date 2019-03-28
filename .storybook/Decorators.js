import React from 'react';
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/theme/theme'
import { Box } from '../src/components/Box/Box'

export const Theming = (storyFn) => (
  <ThemeProvider theme={theme}>
    <Box p={2}>
      {storyFn()}
    </Box>
  </ThemeProvider>
);
