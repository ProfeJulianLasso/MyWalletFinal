import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Pantalla2Screen">
      <Tab.Screen
        name="Pantalla1Screen"
        options={{
          title: 'Inicio',
          tabBarIcon: props =>
            Platform.OS === 'android' ? (
              <Icon name="bitcoin" size={props.size} color={props.color} />
            ) : (
              <Icon name="bone" size={props.size} color={props.color} />
            ),
        }}
        component={Pantalla1Screen}
      />
      <Tab.Screen
        name="Pantalla2Screen"
        options={{ title: 'Favoritos' }}
        component={Pantalla2Screen}
      />
      <Tab.Screen
        name="Pantalla3Screen"
        options={{ title: 'Transacciones' }}
        component={Pantalla3Screen}
      />
    </Tab.Navigator>
  );
};
