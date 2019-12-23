import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src/screens/Home';

// we will use these two screens later in our AppNavigator
import AddItem from './src/screens/AddItem';
import List from './src/screens/List';
import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Settings from './src/screens/Settings';

const AppNavigator = createStackNavigator(
  {
    Home,
    List,
    AddItem,
    Login,
    SignUp,
    Loading,
    Settings
  },
  {
    initialRouteName: 'Loading'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}