import React from "react";
import { StyleSheet, Text } from "react-native";

type version = {
  text: string;
};

function Version({ text }: version) {
  return <Text style={styles.text}>{text}</Text>;
}

export const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    color: "#FFFFFF",
  },
});

export default Version;
