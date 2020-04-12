import React, { useContext, useState, useEffect } from "react";
import { Button, Text, FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";

function Home({ navigation }): React.ReactElement {
  const store = useContext(StoreContext);

  return (
    <SafeAreaView>
      <Text>{store.title}</Text>
      <Text>{store.short}</Text>
      {/* <Text>{JSON.stringify(planets)}</Text>
      <Text>Has error: {JSON.stringify(hasError)}</Text> */}
      {/* <FlatList
        data={store.item}
        renderItem={({ item }) => <ListItem title={item.title} />}
      /> */}
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </SafeAreaView>
  );
}

export default Home;
