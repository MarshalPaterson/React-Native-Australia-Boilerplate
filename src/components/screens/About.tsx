import React, { useContext } from "react";
import { Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";
import { styles } from "../../styles/App";

function About(): React.ReactElement {
  const store = useContext(StoreContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{store.title}</Text>
    </SafeAreaView>
  );
}

export default About;
