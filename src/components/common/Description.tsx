import React from "react";
import { StyleSheet, Text } from "react-native";

function Description({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}

export const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: "#FFFFFF",
    textAlign: "justify"
  },
});
export default Description;
