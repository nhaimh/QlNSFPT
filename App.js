import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import { Button, Text } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator 
      screenOptions={{
      headerShown: false
      }}> 
         <Stack.Screen name = "AuthNavigator" component={AuthNavigator} ></Stack.Screen> 
        {/* <Stack.Screen name = "home" component={AppNavigator}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
