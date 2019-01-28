import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/System/theme';
import { Box } from '../src/components/System';

// Apply the component Theme wrapper globally to all Storybook components
// This ThemeProvider component will also be included at the top level of
// all React component branches
// For details: https://rebassjs.org/theming
const Theme = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box p={4}>
        {props.children}
      </Box>
    </ThemeProvider>
  );
}

export default function(renderStory) {
  return <Theme>{renderStory()}</Theme>;
}
