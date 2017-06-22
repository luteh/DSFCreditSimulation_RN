import Expo from 'expo';
import React from 'react';
import {Root} from './src/Router'

class App extends React.Component {
  render() {
    return (
      <Root/>
    );
  }
}

Expo.registerRootComponent(App);
