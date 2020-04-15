import React, { useContext, useState, useEffect } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";

function Home({ navigation }): React.ReactElement {
  const store = useContext(StoreContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/rns.png")}
          />
          <Text style={styles.rnt}>React Native Australia</Text>
          <Text style={styles.subTitle}>Boilerplate</Text>
          <Text>Bolilerplate</Text>
        </View>
        <Text style={styles.title}>{store.title}</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
        <Text style={styles.title}>{store.version}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
  },
  rnt: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subTitle: {
    fontSize: 17,
    color: "#FFFFFF",
  },
  text: {
    color: "#FFFFFF",
  },
});

export default Home;
