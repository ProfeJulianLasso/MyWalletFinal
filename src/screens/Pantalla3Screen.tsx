import { View, Text, Button } from 'react-native';
import React from 'react';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const Pantalla3Screen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View>
      <Text>Pantalla3Screen</Text>
      <Button title="Volver al inicio" onPress={() => navigation.popToTop()} />
    </View>
  );
};
