import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {hideModal } from '../../../Store/actions/modal.action';

class Header extends Component {
  constructor(props) {
    super(props);
  };

  setModalVisible(visible) {
    this.props.hideModal(visible)
  }

  render() {
    return (
      <View style={styles.modelHeader}>

        <TouchableHighlight
          style={{...styles.openButton, backgroundColor: '#2196F3'}}
          onPress={() => {
            this.setModalVisible(false);
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
    flexDirection:'column',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
  },
});

const mapDispatchToProps = {
  hideModal
};

export default connect(null, mapDispatchToProps)(Header);
