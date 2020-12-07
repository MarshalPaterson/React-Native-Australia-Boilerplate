import React, { useContext } from "react";
import { ActivityIndicator, Alert } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import StoreContext from "../../contexts/StoreContext";
import LoaderContext from "../../contexts/LoaderContext";
import ErrorContext from "../../contexts/ErrorContext";
import { styles } from "../../styles/AppStyles";
import Button from "../common/Button";
import Version from "../common/Version";
import Title from "../common/Title";
import ReactNativeAustralia from "../common/ReactNativeAustralia";
import Description from "../common/Description";
import { useNavigation } from '@react-navigation/native';

function Home(): React.ReactElement {
  const loader = useContext(LoaderContext);
  const error = useContext(ErrorContext);
  const store = useContext(StoreContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ReactNativeAustralia />
      {error.show && Alert.alert(error.message || "Error")}
      {loader.show && <ActivityIndicator size="large" />}
      <Title text={store.title || ""} />
      <Description text={store.description || ""} />
      <Button goto="About" text="About RNAB" />
      <Version text={store.version || ""} />
    </SafeAreaView>
  );
}

export default Home;
