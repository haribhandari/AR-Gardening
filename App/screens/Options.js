import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Menu</Text>
        <View style={[{ flex: 1 }, styles.elementsContainer]}>
          <View style={{ flex: 1, backgroundColor: "#FAA030" }} />
          <View style={{ flex: 1, backgroundColor: "#32B76C" }} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 48,
    flex: 1,
  },
  headerStyle: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 24,
  },
  elementsContainer: {
    backgroundColor: "#ecf5fd",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
};
