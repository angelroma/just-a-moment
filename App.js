import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './Store/index.store';
import HomeIndex from './Views/Home/HomeIndex';
import Icon from 'react-native-vector-icons/Feather';
import { loadTodoFromDatabase } from './Store/task/task.actions'
import AsyncStorage from '@react-native-community/async-storage';


AsyncStorage.clear();

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@data', jsonValue)
  } catch (e) {
    // saving error
  }
}
const data = [
  todos = [
    {
      id: 1,
      text: "RUN",
    },
    {
      id: 2,
      text: "READ",
    }
  ]
]

storeData(data);

const getAsyncStorage = () => {
  return (dispatch) => {
    AsyncStorage.getItem('@data')
      .then((result) => {
        console.log(result)
        dispatch(loadTodoFromDatabase(result))
      });
  };
};

store.dispatch(getAsyncStorage());



const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>{
          <Stack.Navigator initialRouteName="Home" screenOptions={{
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
  componentDidMount() {

  }
}
