import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeModalEntry from './Modal/HomeModalEntry';
import CircleAdder from './Components/CircleAdder';

export default class HomeEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeModalEntry />
        <CircleAdder />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 30,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
  },
});
