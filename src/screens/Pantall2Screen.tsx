import { View, Text, Button } from 'react-native';
import React from 'react';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const Pantall2Screen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View>
      <Text>Pantall2Screen</Text>
      <Button
        title="Ir a Pantalla 3"
        onPress={() => navigation.navigate('Pantall3Screen')}
      />
    </View>
  );
};
