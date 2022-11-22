import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        options={{
          headerTitle: 'Pantalla No. 1',
        }}
        name="Pantalla1Screen"
        component={Pantalla1Screen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Pantalla No. 2',
        }}
        name="Pantalla2Screen"
        component={Pantalla2Screen}
      />
      <Stack.Screen name="Pantalla3Screen" component={Pantalla3Screen} />
    </Stack.Navigator>
  );
};
