import React, {Component} from 'react';
import { Button} from 'react-native'
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from './Store/index.store';
import HomeIndex from './Views/Home/HomeIndex';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>{
          <Stack.Navigator initialRouteName="Home"  screenOptions={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="Home"
                          component={HomeIndex}
                          options={{
                            headerLeft: () => (
                              <Icon name="menu" size={30} color={"white"} />
                            ),
                          }}
                          />
          </Stack.Navigator>
        }</NavigationContainer>
      </Provider>
    );
  }
}
