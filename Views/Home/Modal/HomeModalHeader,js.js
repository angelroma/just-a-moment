import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {hideModal } from '../../../Store/actions/modal.action';
import Icon from 'react-native-vector-icons/Fontisto';

const textColorOnGrey = '#b5b5b5';

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
          style={styles.closeButton}
          onPress={() => {
            this.setModalVisible(false);
          }}
        >
          <Icon name="close-a" size={20} color={textColorOnGrey} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modelHeader: {
    flexDirection:'column',
    borderWidth: 3,
    borderColor: 'green'
  },
  closeButton: {
    padding:10
  }
});

const mapDispatchToProps = {
  hideModal
};

export default connect(null, mapDispatchToProps)(Header);
