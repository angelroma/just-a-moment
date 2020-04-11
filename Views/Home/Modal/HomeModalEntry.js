import React, {Component} from 'react';
import {Modal, View, StyleSheet, Alert} from 'react-native';
import HomeModalFooter from './HomeModalFooter';
import HomeModalHeader from './HomeModalHeader,js';
import {connect} from 'react-redux';

class HomeModalEntry extends Component {
  render() {
    const {visible} = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <HomeModalHeader/>
          <HomeModalFooter/>
        </View>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});


const mapStateToProps = state => {
  const {modalReducer} = state;
  return modalReducer;
};

export default connect(mapStateToProps, null)(HomeModalEntry);
