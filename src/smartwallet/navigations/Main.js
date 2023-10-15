import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Usuario from '../components/Usuario'

const Stack = createNativeStackNavigator();

const Main = () => {

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
       name="Home"
       component={Usuario}
       options={{
         header: () => null
       }}
      />
    </Stack.Navigator>
  );
}

export default Main;