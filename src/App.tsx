import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { MainScreen } from './MainScreen';
import { Test } from './Test';
import { ThemeProvider } from 'styled-components';
import theme from './components/System/theme';
import { Font } from 'expo';

const AppNavigator = createStackNavigator({
  Main: { screen: MainScreen },
  Test: { screen: Test }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component<{}, { fontLoaded: boolean }> {
  constructor(props: {}, context?: any) {
    super(props, context);

    this.state = {
      fontLoaded: false
    };
  }

  public async componentDidMount() {
    await Font.loadAsync({
      'Aleo': require('../assets/fonts/Aleo-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  public render() {
    return (
      <ThemeProvider theme={theme}>
        {this.state.fontLoaded ? <AppContainer /> : undefined}
      </ThemeProvider>
    );
  }
}
