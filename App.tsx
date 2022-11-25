import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { DrawerNavigation } from './src/navigation/DrawerNavigation';
import { Provider } from 'react-redux';
import { ConfigStorage } from './src/redux/storage/ConfigStore';
import { AuthContextProvider } from './src/context/AuthContext';
import StackAuth0Navigator from './src/navigation/StackAuth0Navigator';

const App = () => {
  return (
    <Provider store={ConfigStorage}>
      <AuthContextProvider>
        <NavigationContainer>
          {/* <DrawerNavigation /> */}
          <StackAuth0Navigator />
        </NavigationContainer>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
