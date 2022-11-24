import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { StackNavigation } from './StackNavigation';
import { MenuLateral } from '../screens/MenuLateralScreen';
import { BottomTabsNavigator } from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Pantalla1Screen"
      drawerContent={props => <MenuLateral {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
        name="Pantalla1Screen"
        component={Pantalla1Screen}
      />
      <Drawer.Screen name="Pantalla2Screen" component={Pantalla2Screen} />
      <Drawer.Screen name="Pantalla3Screen" component={Pantalla3Screen} />
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
      <Drawer.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
      />
    </Drawer.Navigator>
  );
};
