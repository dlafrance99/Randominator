import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { setNavigator } from './src/NavigationRef';

import ResolveLoadingScreen from './src/Screens/ResolveLoadingScreen';
import HomeScreen from './src/Screens/HomeScreen';
import SelectListScreen from './src/Screens/SelectListScreen';
import RandominateScreen from './src/Screens/RandominateScreen';
import CreateListScreen from './src/Screens/CreateListScreen';
import SettingsScreen from './src/Screens/SettingsScreen';
import InfoScreen from './src/Screens/InfoScreen';

import { Provider as StylingProvider } from './src/Context/StylingContext';
import { Provider as ListProvider } from './src/Context/ListContext';

const stackNavigator = createSwitchNavigator({
  ResolveLoading: ResolveLoadingScreen,
  NormalFlow: createStackNavigator({
    Home: HomeScreen,
    SelectList: SelectListScreen,
    Randominate: RandominateScreen,
    CreateList: CreateListScreen,
    Settings: SettingsScreen,
    Info: InfoScreen
  },
    {
      headerMode: 'none'
    })
},
  {
    headerMode: 'none'
  })

const App = createAppContainer(stackNavigator);

export default () => {
  return (
    <ListProvider>
      <StylingProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </StylingProvider>
    </ListProvider>
  )
}