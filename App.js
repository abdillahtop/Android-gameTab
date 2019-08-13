import React, { Component } from 'react';
import MainNavigator from './src/Components/NavigatorFunction'
import { Provider } from 'react-redux'
import store from './src/public/redux/store'
import axios from 'axios'

export default class App extends Component {
  render() {
    axios.defaults.headers.common['authorization'] = 'ThisIsHeader'
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}