import React, { Component } from 'react';
import { Button, ScrollView } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

class DestinationAndTitle {
  constructor(destination: string, title?: string) {
    this.destination = destination;
    this.title = title || destination;
  }

  public destination: string;
  public title: string;
}

// tslint:disable-next-line:max-classes-per-file
export class MainScreen extends Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Test'
  };

  public render() {
    return (
      <ScrollView
        style={{
          backgroundColor: '#fff',
          flex: 1
        }}
      >
        {this.destinationAndTitlePairs.map(destinationAndTitle => (
          <Button
            key={destinationAndTitle.destination}
            onPress={() =>
              this.props.navigation.navigate(destinationAndTitle.destination)
            }
            title={destinationAndTitle.title}
          />
        ))}
      </ScrollView>
    );
  }

  private destinationAndTitlePairs: Array<DestinationAndTitle> = [
    new DestinationAndTitle('Test')
  ];
}
