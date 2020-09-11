import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/Screens/HomeScreen';
import CreateListScreen from './src/Screens/CreateListScreen';
import SavedListsScreen from './src/Screens/SavedListsScreen';
import SettingsScreen from './src/Screens/SettingsScreen';
import InfoScreen from './src/Screens/InfoScreen';

const stackNavigator = createStackNavigator({
  Home: HomeScreen,
  CreateList: CreateListScreen,
  SavedLists: SavedListsScreen,
  Settings: SettingsScreen,
  Info: InfoScreen
},
  {
    headerMode: 'none'
  })

const App = createAppContainer(stackNavigator);

export default () => {
  return (
    <App />
  )
}