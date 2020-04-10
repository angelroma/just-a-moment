import React from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import Footer from './Footer';
import Header from './Header,js';

export default function ModalEntry() {

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
        <Footer/>
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
