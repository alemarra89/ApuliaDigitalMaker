/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DatiQuiz from './src/pages/DatiQuiz';
import Esercitazione from './src/pages/Esercitazione';
import Home from './src/pages/Home';
import Lista from './src/pages/Lista';
import PaginaConParametriGrazieMarco from './src/pages/PaginaConParametriGrazieMarco';

export type RootStackParamList = {
  Home: undefined;
  Esercitazione: undefined;
  DatiQuiz: undefined;
  PaginaConParametriGrazieMarco: {
    parametro: string
  },
  Lista: undefined
};

const App = () => {

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Esercitazione" component={Esercitazione} />
        <Stack.Screen name="Lista" component={Lista} />
        <Stack.Screen name="DatiQuiz" component={DatiQuiz} />
        <Stack.Screen name="PaginaConParametriGrazieMarco" component={PaginaConParametriGrazieMarco} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
