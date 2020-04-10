import React from 'react';
import {Modal, StyleSheet, TextInput, View} from 'react-native';
import UselessTextInput from './UselessTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottonInputModal() {
  const [value, onTextChange] = React.useState('');


  return (
    <View>
      <View>
        <TextInput
          style={styles.modalInput}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder={'What do you need to do?'}
          autoFocus
        />
      </View>
      <View style={styles.modalFoot}>
        <Icon name="magic" size={30} color="#fff"/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'lightblue',
  },
});
