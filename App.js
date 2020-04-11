import React, { Component } from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './Store/index.store';
import HomeEntry from './Views/Home/HomeEntry';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>{
          <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeEntry} />
          </Stack.Navigator>
        }</NavigationContainer>
      </Provider>
    );
  }
}
