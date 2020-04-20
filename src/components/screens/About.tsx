import React, { useContext } from "react";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";
import { styles } from "../../styles/AppStyles";
import Version from "../common/Version";
import Title from "../common/Title";
import Description from "../common/Description";

function About(): React.ReactElement {
  const store = useContext(StoreContext);
  return (
    <SafeAreaView style={styles.container}>
      <Title text={store.title} />
      <Description text={store.about} />
      <Version text={store.version} />
    </SafeAreaView>
  );
}

export default About;
