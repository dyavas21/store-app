import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomButton } from "../../Components/Button";

const RegisterScreen = () => {
  return (
    <View>
      <Text>Register Screen</Text>
      <CustomButton
        title="keren"
        color="red"
        container={styles.buttonContainer}
        textStyle={{ color: "white" }}
        onPress={() => {
          console.log("tertekan");
        }}
      />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    height: 50,
    backgroundColor: "blue",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
