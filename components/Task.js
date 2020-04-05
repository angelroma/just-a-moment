import React, {Component} from 'react';
import {Modal, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      modalVisible: false
    };

  }

  _onLongPressButton() {
    alert('Connectate para jugar!');
  }

  _onPressButton() {
    alert('You tapped the button!');
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;


    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
});
