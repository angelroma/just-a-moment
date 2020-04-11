import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const textColorOnGrey = '#b5b5b5';

export default function HomeModalFooter() {
  const [value, onTextChange] = React.useState('');
  // Declare a new state variable, which we'll call "count"

  return (
    <View style={styles.modalFooter}>
      <View>
        <TextInput
          style={styles.modalInput}
          onChangeText={text => onTextChange(text)}
          value={value}
          placeholder={'What would you like to do?'}
          placeholderTextColor={textColorOnGrey}
          autoFocus
        />
      </View>
      <View style={styles.modalFoot}>
        <View style={styles.modalFooterLeft}>
          <Icon name="calendar-check-o" size={20} color={textColorOnGrey} style={styles.iconCustomStyle}/>
          <Icon name="flag-o" size={20} color={textColorOnGrey} style={styles.iconCustomStyle}/>
          <Icon name="slack" size={20} color={textColorOnGrey} style={styles.iconCustomStyle}/>
        </View>
        <View style={styles.modalFooterRight}>
          <Icon name="magic" size={20} color={textColorOnGrey}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalInput: {
    height: 40,
    color: '#fff',
    paddingLeft :15
  },
  modalFoot: {
    padding: 15,
    paddingTop:7,
    flexDirection: 'row',

  },
  modalFooter: {
    backgroundColor: '#636363',
    borderWidth: 1,
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalFooterLeft : {
    flex: 1,
    flexDirection: 'row'
  },
  modalFooterRight: {

  },
  iconCustomStyle: {
    paddingRight: 20
  }
});
