import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { LoginApi } from "../../api/AuthApi";
import { potColor, potFont } from "../../layouts/styling";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Image */}
      <View style={{ alignItems: "center" }}>
        <Image
          resizeMode="cover"
          source={require("../../assets/onboarding1.png")}
          style={styles.imageContainer}
        />
      </View>

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
        <Pressable
          style={[styles.buttonContainer, { backgroundColor: "black" }]}
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          <Text style={[styles.buttonText, { color: potColor.White }]}>
            Register
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.buttonContainer,
            {
              backgroundColor: "grey",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          ]}
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text
            style={styles.buttonText}
            // onPress={async () => {
            //   const res = await LoginApi("mor_2314", "83r5^_");
            //   console.log(res.status);
            //   console.log(res.data);
            // }}
          >
            Sign in
          </Text>
        </Pressable>
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
    height: height / 2,
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
    fontFamily: potFont.OpenSansBold,
  },
  subHeaderText: {
    fontSize: 15,
    textAlign: "center",
    color: "grey",
    fontFamily: potFont.OpenSansSemiBold,
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
  buttonText: {
    fontFamily: potFont.OpenSansBold,
  },
});

export default OnBoardingScreen;
