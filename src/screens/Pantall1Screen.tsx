import { View, Text, Button } from 'react-native';
import React from 'react';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const Pantall1Screen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View>
      <Text>Pantall1Screen</Text>
      <Button
        title="Ir a Pantalla 2"
        onPress={() => navigation.navigate('Pantall2Screen')}
      />
    </View>
  );
};
