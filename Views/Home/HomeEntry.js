import React, {Component} from 'react';
import {Modal, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from './Modal/Footer';
import ModalEntry from './Modal/ModalEntry';

export default class HomeEntry extends Component {
  constructor(props) {
    super(props);

  }

  _onLongPressButton() {
    alert('Connectate para jugar!');
  }

  _onPressButton() {
    alert('You tapped the button!');
  }



  render() {
    return (
      <View style={styles.container}>

        <ModalEntry/>




        <TouchableOpacity style={styles.floatingButton} onPress={() => {
          this.setModalVisible(true);
        }}>
          <Icon name="plus" size={30} color="#fff"/>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 30,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
  },
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
  addTaskComponent: {
    height: 70,
    borderColor: 'gray',
    borderWidth: 1,
  },

});
