import React, { useState } from 'react';
import { StyleSheet, TextInput, View , Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeModalFooter() {
  const [value, onTextChange] = React.useState('');
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

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
        <Icon name="magic" size={30} color="#fff" />
        <Text>You clicked {count} times</Text>
        <Button title={"State use me"}  onPress={() => {setCount(count + 1); console.log(setCount)} }></Button>
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
