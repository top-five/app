import React from 'react';
import { storiesOf } from '@storybook/react';

import { Heading, Box } from './index';

const story = storiesOf('System', module);

story
  .add(
    'Headings',
    () => {
      return (
        <Box>
          <Heading size={100}>100: The quick brown fox jumps over the lazy dog</Heading>
          <Heading size={200}>200: The quick brown fox jumps over the lazy dog</Heading>
          <Heading size={300}>300: The quick brown fox jumps over the lazy dog</Heading>
          <Heading size={400}>400: The quick brown fox jumps over the lazy dog</Heading>
          <Heading size={500}>500: The quick brown fox jumps over the lazy dog</Heading>
          <Heading size={600}>600: The quick brown fox jumps over the lazy dog</Heading>
          <Heading size={700}>700: The quick brown fox jumps over the lazy dog</Heading>
          <Heading size={800}>800: The quick brown fox jumps over the lazy dog</Heading>
          <Heading size={900}>900: The quick brown fox jumps over the lazy dog</Heading>
        </Box>
      );
    }
  );
