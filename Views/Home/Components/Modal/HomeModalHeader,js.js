import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {hideModal } from '../../../../Store/modal/modal.action';
import Icon from 'react-native-vector-icons/Fontisto';

const textColorOnGrey = '#b5b5b5';

class Header extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View style={styles.modelHeader}>

        <TouchableHighlight
          style={styles.closeButton}
          onPress={() => {
            this.props.hideModal({visible:false})
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
  },
  closeButton: {
    padding:15,
    backgroundColor: 'black'
  }
});

const mapDispatchToProps = {
  hideModal
};

export default connect(null, mapDispatchToProps)(Header);
