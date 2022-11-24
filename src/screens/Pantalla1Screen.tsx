import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setToken } from '../redux/slices/AuthSlice';

export const Pantalla1Screen = ({ navigation }: MyStackScreenProps) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (isAuth) {
      navigation.navigate('Pantalla2Screen');
    }
  }, [isAuth, navigation]);

  const login = () => {
    dispatch(setToken('token123'));
    dispatch(setLogin());
  };

  return (
    <View>
      <Text style={{ fontSize: 20 }}>Usuario</Text>
      <Text style={{ fontSize: 20 }}>Contraseña</Text>
      <Button title="IDENTIFICARSE" onPress={login} />
    </View>
  );
};
