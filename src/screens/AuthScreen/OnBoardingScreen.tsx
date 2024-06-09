import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const OnBoardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Image */}
      <Image
        resizeMode="cover"
        source={require("../../assets/onboarding1.png")}
        style={styles.imageContainer}
      />

      {/* header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Publish your passion</Text>
        <Text style={styles.headerText}>in own way</Text>
      </View>

      {/* sub header */}
      <View style={styles.headerContainer}>
        <Text style={styles.subHeaderText}>
          Join a world full of creative writers
        </Text>
        <Text style={styles.subHeaderText}>and story tellers</Text>
      </View>

      {/* Button */}
      <View style={styles.bottomContainer}>
        <View style={[styles.buttonContainer, { backgroundColor: "black" }]}>
          <Text style={{ color: "white" }}>Register</Text>
        </View>
        <View
          style={[
            styles.buttonContainer,
            {
              backgroundColor: "grey",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          ]}
        >
          <Text>Sign in</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 12 : 0,
  },
  imageContainer: {
    justifyContent: "center",
    height: height / 3,
    width: width - 24,
    backgroundColor: "#EB7760",
    borderRadius: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 24,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1,
  },
  subHeaderText: {
    fontSize: 15,
    textAlign: "center",
    color: "grey",
  },
  bottomContainer: {
    // justifyContent: "space-between",
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    backgroundColor: "grey",
    borderRadius: 12,
    width: width - 24,
    alignSelf: "center",
  },
  buttonContainer: {
    height: 60,
    flex: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnBoardingScreen;
