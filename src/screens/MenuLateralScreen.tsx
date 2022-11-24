import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { MyDrawerContentComponentProps } from '../interfaces/MyDrawerContentComponentProps';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../redux/slices/AuthSlice';

export const MenuLateral = ({ navigation }: MyDrawerContentComponentProps) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!isAuth) {
      navigation.navigate('Pantalla1Screen');
    }
  }, [isAuth, navigation]);

  const logout = () => {
    dispatch(setLogout());
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Este es mi menú lateral</Text>
      <Button title="Logout" onPress={logout} />
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
