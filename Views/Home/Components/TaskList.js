import React from 'react';
import {connect} from 'react-redux';
import Task from '../Components/Task';
import {View} from 'react-native';


const TaskList = ({todos}) => (
  <View>
    {todos.map((todo, index) => {
      return <Task key={todo.id} todo={todo}/>;
    })
    }
  </View>
);

const mapStateToProps = state => {
   return { todos: state.todos };
};
export default connect(mapStateToProps)(TaskList);
