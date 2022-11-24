import { View, Text, Button } from 'react-native';
import React from 'react';
import { MyDrawerContentComponentProps } from '../interfaces/MyDrawerContentComponentProps';
import { useDispatch } from 'react-redux';
import { setLogout } from '../redux/slices/AuthSlice';

export const MenuLateral = ({ navigation }: MyDrawerContentComponentProps) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setLogout());
    navigation.navigate('AuthScreen');
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Este es mi menú lateral</Text>
      <Button
        title="Stack Navigation"
        onPress={() => navigation.navigate('StackNavigation')}
      />
      <Button
        title="Pantalla solitaria"
        onPress={() => navigation.navigate('SolitariaScreen')}
      />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};
