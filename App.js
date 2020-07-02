/**
 * @format
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import GameScreenContainer from './src/containers/GameScreenContainer';
import configureStore from './configStore';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(),
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <GameScreenContainer />
      </Provider>
    );
  }
}
