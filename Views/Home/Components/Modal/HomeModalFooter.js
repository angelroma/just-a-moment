import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {addTodo} from '../../../../Store/task/task.actions';
import {hideModal} from '../../../../Store/modal/modal.action';
import {connect} from 'react-redux';

const textColorOnGrey = '#b5b5b5';
const textColorOnWrote = '#00a8cc';

class HomeModalFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textColorOnGrey: '#b5b5b5',
    };
  }

  onTextChange(value) {
    this.setState({
      value: value,
    });
  }

  onPress = () => {
    //I want to add a new task if the input is not empty
    if (this.state.value !== null || this.state.value !== '') {
      //Require last ID from the current todos state
      let todos = this.props.todos;
      //Finally require the last item
      const lastItem = todos[todos.length - 1];
      //Increment the last id so we don't add duplicated key
      const incrementedId = lastItem.id + 1;
      //Add new item on to todos state
      this.props.addTodo({id: incrementedId, text: this.state.value});
      //Finally close modal to return to taskList
      this.props.hideModal({visible: false});
    }
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

          <TouchableWithoutFeedback style={styles.modalFooterRight} onPress={this.onPress}>
            <Icon name="magic" size={20} color={this.state.value === '' ? textColorOnGrey : textColorOnWrote}/>
          </TouchableWithoutFeedback>

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

const mapStateToProps = state => {
  return {todos: state.todos};
};

const mapDispatchToProps = {
  addTodo,
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeModalFooter);
