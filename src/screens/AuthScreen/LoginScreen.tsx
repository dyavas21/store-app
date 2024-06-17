import React from "react";
import { View, Text } from "react-native";
import { CustomTextInput } from "../../Components/CustomTextInput";

const LoginScreen = () => {
  return (
    <View>
      <View>
        <Text>Hello Again!</Text>
        <Text>Welcome back you've benn missed!</Text>
      </View>

      <View>
        <CustomTextInput />
      </View>
    </View>
  );
};

export default LoginScreen;
