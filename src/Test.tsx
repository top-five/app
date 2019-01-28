import React, { Component } from 'react';
import { Heading, Box, StyledScrollView } from './components/System';
import { NavigationScreenProps } from 'react-navigation';

export class Test extends Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Test Components'
  };

  public render() {
    return (
      <StyledScrollView>
        <Box p={6} display="flex">
          <Heading alignSelf="center" size={900}>Hello World</Heading>
        </Box>
      </StyledScrollView>
    );
  }
}
