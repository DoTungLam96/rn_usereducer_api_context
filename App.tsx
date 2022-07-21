import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import {LoginProvider} from './src/store/loginContext';

const App = () => {
  return (
    <LoginProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </LoginProvider>
  );
};
export default App;
