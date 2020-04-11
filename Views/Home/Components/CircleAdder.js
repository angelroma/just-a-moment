import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {showModal} from '../../../Store/actions/modal.action';

class CircleAdder extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.floatingButton} onPress={() => {
        this.props.showModal(true);
      }}>
        <Icon name="plus" size={30} color="#fff"/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

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
});

const mapStateToProps = state => {
  const {modalReducer} = state;
  return modalReducer;
};

const mapDispatchToProps = {
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(CircleAdder);
