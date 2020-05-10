import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import HomeModalIndex from './Components/Modal/HomeModalIndex';
import CircleAdder from './Components/CircleAdder';
import Task from './Components/Task';
import TaskList from './Components/TaskList';

class HomeIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeModalIndex/>

        <TaskList/>

        <CircleAdder/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 30,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});

export default HomeIndex;
