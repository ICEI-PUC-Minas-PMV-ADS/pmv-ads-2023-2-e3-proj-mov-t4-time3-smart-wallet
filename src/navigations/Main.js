import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Usuario from '../pages/Usuario'
import NovoLançamento from '../pages/NovoLancamento';
import Extrato from '../pages/Extrato';

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
       <Stack.Screen
        name="NovoLançamento"
        component={NovoLançamento}
        options={{
          header: () => null
        }}
        />
        <Stack.Screen
          name="Extrato"
          component={Extrato}
          options={{
            header: () => null
          }}
        />
     </Stack.Navigator>
  );
}

export default Main;