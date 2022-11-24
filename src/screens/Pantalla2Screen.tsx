import { View, Text, Button } from 'react-native';
import React from 'react';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const Pantalla2Screen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View>
      <Text>Pantalla2Screen</Text>
      <Button
        title="Ir a Pantalla 3"
        onPress={() => navigation.navigate('Pantalla3Screen')}
      />
    </View>
  );
};
