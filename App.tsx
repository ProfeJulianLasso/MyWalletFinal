import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';
import { Provider } from 'react-redux';
import { ConfigStorage } from './src/redux/storage/ConfigStore';

const App = () => {
  return (
    <Provider store={ConfigStorage}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
