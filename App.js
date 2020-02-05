import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';

import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Settings from './src/screens/Settings';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home, navigationOptions: { header: null } },
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

export default App = ({ Navigation }) => {
  return <AppContainer />;
};
