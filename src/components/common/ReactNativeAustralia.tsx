import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

function ReactNativeAustralia() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/rns.png")} />
      <Text style={styles.rnt}>React Native Australia</Text>
      <Text style={styles.subTitle}>Boilerplate</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 24,
  },
  image: {
    width: 120,
    height: 120,
  },
  rnt: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subTitle: {
    fontSize: 17,
    color: "#FFFFFF",
    marginBottom: 42,
  },
});

export default ReactNativeAustralia;
