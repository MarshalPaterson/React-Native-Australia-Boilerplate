import React from "react";
import { StyleSheet, Text } from "react-native";

function Title({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}

export const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
export default Title;
