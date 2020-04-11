import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
  };

  state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible,
    });
  }

  render() {
    return (
      <View style={styles.modelHeader}>
        <Text>Hello World!</Text>

        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
          onPress={() => {
            this.setModalVisible(!this.modalVisible);
          }}
        >
          <Text>Hide Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modelHeader: {
    padding: 35,
    backgroundColor: '#fff',
  }
});

const mapStateToProps = state => {
  console.log(state)
  return state;
}
export default connect(mapStateToProps)(Header);
