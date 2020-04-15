import React, { useContext, useState, useEffect } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";
import { styles } from "../../styles/App";

function Home({ navigation }): React.ReactElement {
  const store = useContext(StoreContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/rns.png")} />
        <Text style={styles.rnt}>React Native Australia</Text>
        <Text style={styles.subTitle}>Boilerplate</Text>
        <Text>Bolilerplate</Text>
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

export default Home;
