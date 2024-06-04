/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import LOGIN from './src/Auth/Login/LogIn';
import Home from './src/screens/Home/Home';
import Map from './src/screens/Map/Map';
import Favorites from './src/screens/Favorites/favorites';
import Signup from './src/Auth/Signup/Signup';
import EmailVerification from "./src/Auth/EmailVerification/verification"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false
        }
      }>
        <Stack.Screen name='Login' component={LOGIN} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='EmailVerification' component={EmailVerification} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Favorites' component={Favorites} />
        <Stack.Screen name='Map' component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
