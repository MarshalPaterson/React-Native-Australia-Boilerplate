import React, { useContext } from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";
import { styles } from "../../styles/AppStyles";
import Version from "../common/Version";
import Title from "../common/Title";
import Description from "../common/Description";
import ReactNativeAustralia from "../common/ReactNativeAustralia";
import LinkedIn from "../common/LinkedIn";
import GitHub from "../common/GitHub";

function About(): React.ReactElement {
  const store = useContext(StoreContext);
  return (
    <SafeAreaView style={styles.container}>
      <ReactNativeAustralia />
      <Title text={store.title || ""} />
      <Description text={store.about || ""} />
      <View style={styles.itemsInRow}>
        <LinkedIn />
        <GitHub />
      </View>
      <Version text={store.version || ""} />
    </SafeAreaView>
  );
}

export default About;
