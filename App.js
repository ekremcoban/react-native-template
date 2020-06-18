/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/MainScreen';
import HomeScreen from './src/HomeScreen';
import { SCREEN } from './Utilities/Texts';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN.Home}>
        <Stack.Screen name={SCREEN.Home} component={HomeScreen} />
        <Stack.Screen name={SCREEN.Main} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
