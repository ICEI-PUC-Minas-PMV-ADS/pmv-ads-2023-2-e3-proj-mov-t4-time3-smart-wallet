import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Usuario from '../pages/Usuario';
import Lancamento from '../pages/Lancamento';
import Relatorio from '../pages/Relatorio';
import Extrato from '../pages/Extrato';

const Stack = createNativeStackNavigator();

const Main = () => (
  <Stack.Navigator initialRouteName="Usuario">
    <Stack.Screen
      name="Usuario"
      component={Usuario}
      options={{
        header: () => null
      }} />
    <Stack.Screen
      name="Lancamento"
      component={Lancamento}
      options={{
        header: () => null
      }} />
    <Stack.Screen
      name="Relatorio"
      component={Relatorio}
      options={{
        header: () => null
      }} />
    <Stack.Screen
      name="Extrato"
      component={Extrato}
      options={{
        header: () => null
      }} />
  </Stack.Navigator>
)

export default Main;