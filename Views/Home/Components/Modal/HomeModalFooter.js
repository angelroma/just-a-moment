import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {addTodo} from '../../../../Store/task/task.actions';
import {connect} from 'react-redux';

const textColorOnGrey = '#b5b5b5';
const textColorOnWrote = '#00a8cc';

class HomeModalFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textColorOnGrey: '#b5b5b5'
    };
  }

  onTextChange(value) {
    this.setState({
      value: value,
    });
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <View style={styles.modalFooter}>
        <View>
          <TextInput
            style={styles.modalInput}
            onChangeText={text => this.onTextChange(text)}
            value={this.state.value}
            placeholder={'What would you like to do?'}
            placeholderTextColor={textColorOnGrey}
            autoFocus
          />
        </View>
        <View style={styles.modalFoot}>
          <View style={styles.modalFooterLeft}>
            <Icon name="calendar-check-o" size={20} color={textColorOnGrey} style={styles.iconCustomStyle}/>
            <Icon name="flag-o" size={20} color={textColorOnGrey} style={styles.iconCustomStyle}/>
            <Icon name="slack" size={20} color={textColorOnGrey} style={styles.iconCustomStyle}/>
          </View>

          <TouchableWithoutFeedback  style={styles.modalFooterRight} onPress={this.onPress}>
            <Icon name="magic" size={20} color={this.state.value === "" ? textColorOnGrey: textColorOnWrote}/>
          </TouchableWithoutFeedback >

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalInput: {
    height: 40,
    color: '#fff',
    paddingLeft: 15,
  },
  modalFoot: {
    padding: 15,
    paddingTop: 7,
    flexDirection: 'row',

  },
  modalFooter: {
    backgroundColor: '#636363',
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalFooterLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  modalFooterRight: {},
  iconCustomStyle: {
    paddingRight: 20,
  },
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(HomeModalFooter);
