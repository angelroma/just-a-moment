import React, {Component} from 'react';
import Task from './components/Task';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
        <NavigationContainer>{
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Task}/>
          </Stack.Navigator>
        }</NavigationContainer>
    );
  }
}
