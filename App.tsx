import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainStackNavigation from "./src/navigations/MainStackNavigation";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

// Function to fetch fonts asynchronously
const fetchFonts = async () => {
  await Font.loadAsync({
    // /src/assets/fonts/Montserrat-Bold.ttf
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
    "OpenSans-Bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./src/assets/fonts/OpenSans-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // Load fonts when the component mounts
  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts();
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  // Render MainStackNavigation only after fonts are loaded
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="white" />
      {fontLoaded ? <MainStackNavigation /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
