import React from "react";
import { Text, ImageBackground, Image, View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Wellcome to Store</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
          buttonColor="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
