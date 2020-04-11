import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CircleAdder() {

  return (

    <TouchableOpacity style={styles.floatingButton} onPress={() => {
      this.setModalVisible(true);
    }}>
      <Icon name="plus" size={30} color="#fff"/>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({

  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 40,
    right: 40,
    height: 70,
    borderRadius: 100,
  },


});
