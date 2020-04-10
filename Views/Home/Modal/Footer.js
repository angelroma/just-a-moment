import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
  const [value, onTextChange] = React.useState('');

  return (
    <View>
      <View>
        <TextInput
          style={styles.modalInput}
          onChangeText={text => onTextChange(text)}
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
  modalFoot: {
    padding: 15,
    flexDirection: 'row-reverse',
  },
});
