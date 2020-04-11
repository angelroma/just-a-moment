import React from 'react';
import {Modal, View, StyleSheet, Alert} from 'react-native';
import HomeModalFooter from './HomeModalFooter';
import HomeModalHeader from './HomeModalHeader,js';

export default function HomeModalEntry() {

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <HomeModalHeader/>
        <HomeModalFooter/>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
