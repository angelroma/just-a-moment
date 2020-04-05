import React, {Component} from 'react';
import {Modal, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      modalVisible: false,
    };
  }

  _onLongPressButton() {
    alert('Connectate para jugar!');
  }

  _onPressButton() {
    alert('You tapped the button!');
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {modalVisible} = this.state;

    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modelHeader}>
              <Text>Hello World!</Text>

              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#2196F3'}}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>

            <View>

            </View>
          </View>

          <View style={styles.modalBottom}>
            <TextInput
              style={styles.modalInput}
              autoFocus
            />
          </View>

          <View>
          </View>
        </Modal>

        <TouchableHighlight style={styles.taskContainer} onPress={this._onPressButton}
                            onLongPress={this._onLongPressButton} underlayColor="red">
          <Text style={styles.taskText}>
            Run
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.taskContainer} onPress={this._onPressButton}
                            onLongPress={this._onLongPressButton} underlayColor="red">
          <Text style={styles.taskText}>
            Read
          </Text>
        </TouchableHighlight>

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
  taskContainer: {
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
  },
  taskText: {
    fontSize: 30,
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

  //MODAL
  centeredView: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modelHeader: {
    padding: 35,
    backgroundColor: '#fff',
  },
  modalBottom: {
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'black',

  },
});
