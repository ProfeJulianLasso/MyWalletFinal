import { View, Text, Alert, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const HomeScreen = ({ navigation }: MyStackScreenProps) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
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
      <Text style={{ fontSize: 20 }}>HomeScreen</Text>
    </View>
  );
};
