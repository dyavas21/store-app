import React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/AuthScreen/RegisterScreen";
import LoginScreen from "../screens/AuthScreen/LoginScreen";
import OnBoardingScreen from "../screens/AuthScreen/OnBoardingScreen";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: Theme.maintheme,
    background: "white",
    card: "white",
    text: "black",
    // border: Theme.maintheme,
    // notification: Theme.maintheme,
  },
};

const MainStackNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
