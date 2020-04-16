import React, { useContext } from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  Text,
  Image,
  Modal,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";
import LoaderContext from "../../contexts/LoaderContext";
import ErrorContext from "../../contexts/ErrorContext";
import { styles } from "../../styles/AppStyles";

function Home({ navigation }): React.ReactElement {
  const loader = useContext(LoaderContext);
  const error = useContext(ErrorContext);
  const store = useContext(StoreContext);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../../assets/rns.png")} />
      <Text style={styles.rnt}>React Native Australia</Text>
      <Text style={styles.subTitle}>Boilerplate</Text>
      <Text style={styles.text}>{error.message}</Text>
      {
        loader.show && (<ActivityIndicator size="large" />)
      }
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
