import { View, Text, Button } from 'react-native';
import React from 'react';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const Pantall3Screen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View>
      <Text>Pantall3Screen</Text>
      <Button title="Atras" onPress={() => navigation.goBack()} />
      <Button title="Volver al inicio" onPress={() => navigation.popToTop()} />
    </View>
  );
};
