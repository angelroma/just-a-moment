import React from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default function Header() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.modelHeader}>
      <Text>Hello World!</Text>

      <TouchableHighlight
        style={{...styles.openButton, backgroundColor: '#2196F3'}}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text>Hide Modal</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  modelHeader: {
    padding: 35,
    backgroundColor: '#fff',
  },
});
