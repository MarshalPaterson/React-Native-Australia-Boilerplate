import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import OpenUrl from "../../utils/OpenUrl";

function LinkedIn() {
  return (
    <TouchableOpacity onPress={() => OpenUrl.call("https://www.linkedin.com/groups/13532424/")}>
      <Image style={styles.image} source={require("../../assets/LI-In-Bug.png")} />
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
    height: 51,
    margin: 8,
  },
});

export default LinkedIn;
