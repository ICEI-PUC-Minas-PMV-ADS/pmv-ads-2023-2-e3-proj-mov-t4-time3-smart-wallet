import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Usuario from "../pages/Usuario";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Usuario"
        component={Usuario}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
