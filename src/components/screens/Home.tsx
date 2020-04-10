import React, { useContext } from "react";
import { Button, Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";

function Home({ navigation }): React.ReactElement {
  const store = useContext(StoreContext);

  return (
    <SafeAreaView>
      <Text>{store.name}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </SafeAreaView>
  );
}

export default Home;
