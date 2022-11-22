import { View, Text, Button } from 'react-native';
import React from 'react';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const Pantalla1Screen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View>
      <Text>Pantalla1Screen</Text>
      <Button
        title="Ir a Pantalla 2"
        onPress={() => navigation.navigate('Pantalla2Screen')}
      />
    </View>
  );
};
