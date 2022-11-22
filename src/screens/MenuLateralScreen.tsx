import { View, Text, Button } from 'react-native';
import React from 'react';
import { MyDrawerContentComponentProps } from '../interfaces/MyDrawerContentComponentProps';

export const MenuLateral = ({ navigation }: MyDrawerContentComponentProps) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Este es mi menú lateral</Text>
      <Button
        title="Ir a Pantalla 1"
        onPress={() => navigation.navigate('Pantalla1Screen')}
      />
      <Button
        title="Ir a Pantalla 2"
        onPress={() => navigation.navigate('Pantalla2Screen')}
      />
      <Button
        title="Ir a Pantalla 3"
        onPress={() => navigation.navigate('Pantalla3Screen')}
      />
      <Button
        title="Stack Navigation"
        onPress={() => navigation.navigate('StackNavigation')}
      />
      <Button
        title="Bottom Tabs Navigator"
        onPress={() => navigation.navigate('BottomTabsNavigator')}
      />
    </View>
  );
};
