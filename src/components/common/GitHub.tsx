import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import OpenUrl from "../../utils/OpenUrl";

function GitHub() {
  return (
    <TouchableOpacity onPress={() => OpenUrl.call("https://github.com/MarshalPaterson/React-Native-Australia-Boilerplate")}>
      <Image style={styles.image} source={require("../../assets/GitHub-Mark.png")} />
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
  image: {
    width: 60,
    height: 60,
    margin: 8,
  },
});
export default GitHub;
