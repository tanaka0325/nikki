import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';

import App from './App';

export default class Setup extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
  }

  render() {
    return (
      <Provider>
        <App />
      </Provider>
    );
  }
}
