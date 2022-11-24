import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pantall1Screen } from '../screens/Pantall1Screen';
import { Pantall2Screen } from '../screens/Pantall2Screen';
import { Pantall3Screen } from '../screens/Pantall3Screen';

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
        name="Pantall1Screen"
        component={Pantall1Screen}
      />
      <Stack.Screen name="Pantall2Screen" component={Pantall2Screen} />
      <Stack.Screen name="Pantall3Screen" component={Pantall3Screen} />
    </Stack.Navigator>
  );
};
