import React, { useContext } from "react";
import { Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";

function About(): React.ReactElement {
  const store = useContext(StoreContext);
  return (
    <SafeAreaView>
      <Text>{store.title}</Text>
      <Text>{store.description}</Text>
    </SafeAreaView>
  );
}

export default About;
