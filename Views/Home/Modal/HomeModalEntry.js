import React from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import HomeModalFooter from './HomeModalFooter';
import Header from './HomeModalHeader,js';

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
        <Header/>
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
