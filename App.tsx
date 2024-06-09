import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainStackNavigation from "./src/navigations/MainStackNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainStackNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
