import { useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';

export const useBotonAtras = (routName: string, target?: string) => {
  useEffect(() => {
    const backAction = () => {
      if (target && routName === target) {
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
        return null;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [routName, target]);
};
