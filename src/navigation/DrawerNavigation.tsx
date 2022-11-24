import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthScreen } from '../screens/AuthScreen';
import { Pantalla2Screen } from '../screens/FavoritosScreen';
import { Pantalla3Screen } from '../screens/TransaccionesScreen';
import { StackNavigation } from './StackNavigation';
import { MenuLateral } from '../screens/MenuLateralScreen';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import SolitariaScreen from '../screens/SolitariaScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="AuthScreen"
      drawerContent={props => <MenuLateral {...props} />}
      screenOptions={{
        unmountOnBlur: true,
      }}>
      {/* AuthScreen */}
      <Drawer.Screen
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
        name="AuthScreen"
        component={AuthScreen}
      />
      <Drawer.Screen name="SolitariaScreen" component={SolitariaScreen} />
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
      <Drawer.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
      />
    </Drawer.Navigator>
  );
};
