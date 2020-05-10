import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {connect} from 'react-redux'

class Task extends Component {
  constructor(props) {
    super(props);
  }

  _onLongPressButton = () => {
    alert('_onLongPressButton!');
  };

  _onPressButton = () => {
    alert('_onPressButton!');
  };

  render() {
    return (
      <TouchableHighlight style={styles.taskContainer} onPress={this._onPressButton}
                          onLongPress={this._onLongPressButton} underlayColor="red">
        <Text style={styles.taskText}>
          {this.props.todo.text}
        </Text>
      </TouchableHighlight>

    );
  }
}

const styles = StyleSheet.create({

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
    color:"#fff"
  },
});

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
