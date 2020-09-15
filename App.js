import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/Screens/HomeScreen';
import SelectListScreen from './src/Screens/SelectListScreen';
import CreateListScreen from './src/Screens/CreateListScreen';
import SettingsScreen from './src/Screens/SettingsScreen';
import InfoScreen from './src/Screens/InfoScreen';

import { Provider as StylingProvider } from './src/Context/StylingContext';
import { Provider as ListProvider } from './src/Context/ListContext';

const stackNavigator = createStackNavigator({
  CreateList: CreateListScreen,
  Home: HomeScreen,
  SelectList: SelectListScreen,
  Settings: SettingsScreen,
  Info: InfoScreen
},
  {
    headerMode: 'none'
  })

const App = createAppContainer(stackNavigator);

export default () => {
  return (
    <ListProvider>
      <StylingProvider>
        <App />
      </StylingProvider>
    </ListProvider>
  )
}