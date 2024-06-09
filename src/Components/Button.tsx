import React, { RefAttributes } from "react";
import {
  View,
  StyleSheet,
  ButtonProps,
  Button,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle,
} from "react-native";

interface Props extends ButtonProps, RefAttributes<Button> {
  title: string;
  color: string;
  container: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}

export const CustomButton = (props: Props) => {
  return (
    <View style={props.container}>
      <Text style={props.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
