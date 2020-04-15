import React, { useContext } from "react";
import { Button, Text, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";
import { styles } from "../../styles/AppStyles";

function Home({ navigation }): React.ReactElement {
  const store = useContext(StoreContext);
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../../assets/rns.png")} />
      <Text style={styles.rnt}>React Native Australia</Text>
      <Text style={styles.subTitle}>Boilerplate</Text>
      <Text>Bolilerplate</Text>
      <Text style={styles.title}>{store.title}</Text>
      <Text style={styles.text}>{store.description}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <Text style={styles.version}>{store.version}</Text>
    </SafeAreaView>
  );
}

export default Home;
