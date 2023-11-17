
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import SOS from "./SOS";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="SOS" component={SOS} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}