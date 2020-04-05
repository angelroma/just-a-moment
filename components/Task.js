import React, {Component} from 'react';
import {Button,View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 30,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey'
  },
  taskContainer: {
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1
  },
  taskText: {
    fontSize: 30
  },
  openButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    marginBottom: 15
  },
});


export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  _onLongPressButton() {
    alert('Connectate para jugar!')
  }

  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.taskContainer} onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="red">
          <Text style={styles.taskText}>
            Run
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.taskContainer} onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="red">
          <Text style={styles.taskText}>
            Read
          </Text>
        </TouchableHighlight>



        <TouchableOpacity
          style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:70,
            position: 'absolute',
            bottom: 40,
            right: 40,
            height:70,
            backgroundColor:'#fff',
            borderRadius:100,

          }}
        >
          <Icon name="plus"  size={30} color="#01a699" />
        </TouchableOpacity>

        {/*<TextInput*/}
        {/*  style={{height: 70, borderColor: 'gray', borderWidth: 1, backgroundColor:'grey'}}*/}
        {/*  onChangeText={(text) => this.setState({text})}*/}
        {/*  value={this.state.text}*/}
        {/*/>*/}
      </View>
    );
  }
}
