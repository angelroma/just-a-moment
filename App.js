import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StatusBar} from 'react-native';
import Task from './components/Task';

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Task />
      </View>
    );
  }
}
