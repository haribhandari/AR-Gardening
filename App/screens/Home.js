import React from "react";
import { View, StyleSheet, StatusBar, Dimensions, Image } from "react-native";

import colors from "../constants/colors";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.8,
    height: screen.width * 0.8,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.6,
    height: screen.width * 0.6,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/bug.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logi.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
