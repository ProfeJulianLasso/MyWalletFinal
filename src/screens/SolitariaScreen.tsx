import { View, Text, Alert, BackHandler } from 'react-native';
import React from 'react';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { useEffect } from 'react';

export default function SolitariaScreen({ navigation }: MyStackScreenProps) {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        navigation.navigate('BottomTabsNavigator'); // Navego hacia un navegador por defecto
        // BackHandler.exitApp(); // Me salgo de la APP
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View>
      <Text style={{ fontSize: 20 }}>SolitariaScreen</Text>
    </View>
  );
}
