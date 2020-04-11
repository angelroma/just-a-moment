import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default function Task() {

  const _onLongPressButton = () => {
    alert('_onLongPressButton!');
  };

  const _onPressButton = () => {
    alert('_onPressButton!');
  };

  return (
    <TouchableHighlight style={styles.taskContainer} onPress={_onPressButton}
                        onLongPress={_onLongPressButton} underlayColor="red">
      <Text style={styles.taskText}>
        Run
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({

  taskContainer: {
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
  },
  taskText: {
    fontSize: 30,
  },
});
