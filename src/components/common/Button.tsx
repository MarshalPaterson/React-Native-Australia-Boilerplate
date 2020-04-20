import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

function Button({ navigation, goto, text }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(goto)}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "#444445",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: 15,
    margin: 32,
  },
});
export default Button;
