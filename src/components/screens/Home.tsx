import React, { useContext } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
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
      <Text style={styles.title}>{store.title}</Text>
      <Text style={styles.text}>{store.description}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <View style={styles.button}>
          <Text style={{ color: "white" }}>About RNAB</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.version}>{store.version}</Text>
    </SafeAreaView>
  );
}

export default Home;
