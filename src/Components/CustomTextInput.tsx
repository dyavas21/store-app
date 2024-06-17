import React, { RefAttributes } from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle,
  TextInputProps,
  TextInput,
} from "react-native";

interface Props extends TextInputProps, RefAttributes<TextInput> {
  title: string;
  color: string;
  container: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}

export const CustomTextInput = (props: Props) => {
  return <TextInput style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "grey",
    height: 45,
  },
});
