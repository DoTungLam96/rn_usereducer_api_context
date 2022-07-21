/* eslint-disable react-native/no-inline-styles */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Detail from '../screens/Detail';
import Home from '../screens/Home';
import Login from '../screens/Login';
const Stack = createNativeStackNavigator();

export const SCREEN_NAME = {
  Login: 'Login',
  Home: 'Home',
  Detail: 'Detail',
};

const StackNavigation = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAME.Login}>
      <Stack.Screen name={SCREEN_NAME.Login} component={Login} />

      <Stack.Screen name={SCREEN_NAME.Home} component={Home} />

      <Stack.Screen name={SCREEN_NAME.Detail} component={Detail} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
