import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {showModal} from '../../../Store/modal/modal.action';

class CircleAdder extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.floatingButton} onPress={() => {
        this.props.showModal({visible:true});
      }}>
        <Icon name="plus" size={20} color="#fff"/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  floatingButton: {
    borderWidth: 1,
    borderColor: '#00a8cc',
    backgroundColor: '#00a8cc',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 100,
  },
});

const mapStateToProps = state => {
  const { modal} = state;
  return modal;
};

const mapDispatchToProps = {
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(CircleAdder);
