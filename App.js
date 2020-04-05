import React, {Component} from 'react';
import Task from './components/Task';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';


const Stack = createStackNavigator();

const buttonStyle = StyleSheet.create({
  general: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default class App extends Component {


  render() {
    return (
        <NavigationContainer>{
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Task} options={{headerShown: true}}/>
          </Stack.Navigator>
        }</NavigationContainer>
    );
  }
}
