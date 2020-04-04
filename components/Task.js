import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 30,
  },
  taskContainer: {
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1
  },
  taskText: {
    fontSize: 30
  }
});

export default class Task extends Component {

  _onLongPressButton() {
    alert('Connectate para jugar!')
  }

  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.taskContainer} onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="red">
          <Text style={styles.taskText}>
            Run
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.taskContainer} onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="red">
          <Text style={styles.taskText}>
            Mauro
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
