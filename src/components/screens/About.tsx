import React, { useContext } from "react";
import { Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";
import { styles } from "../../styles/AppStyles";

function About(): React.ReactElement {
  const store = useContext(StoreContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{store.title}</Text>
      <Text style={styles.text}>{store.about}</Text>
      <Text style={styles.version}>{store.version}</Text>
    </SafeAreaView>
  );
}

export default About;
