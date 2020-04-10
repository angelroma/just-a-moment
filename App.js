import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeEntry from './Views/Home/HomeEntry';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>{
        <Stack.Navigator initialRouteName="Index" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeEntry}/>
        </Stack.Navigator>
      }</NavigationContainer>
    );
  }
}
