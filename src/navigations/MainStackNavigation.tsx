import React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/AuthScreen/RegisterScreen";
import LoginScreen from "../screens/AuthScreen/LoginScreen";

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
