import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritosScreen } from '../screens/FavoritosScreen';
import { TransaccionesScreen } from '../screens/TransaccionesScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        options={{
          title: 'Inicio',
          tabBarIcon: props =>
            Platform.OS === 'android' ? (
              <Icon name="bitcoin" size={props.size} color={props.color} />
            ) : (
              <Icon name="bone" size={props.size} color={props.color} />
            ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="FavoritosScreen"
        options={{ title: 'Favoritos' }}
        component={FavoritosScreen}
      />
      <Tab.Screen
        name="TransaccionesScreen"
        options={{ title: 'Transacciones' }}
        component={TransaccionesScreen}
      />
    </Tab.Navigator>
  );
};
