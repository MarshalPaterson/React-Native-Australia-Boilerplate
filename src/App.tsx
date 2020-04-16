import React, { useState, useEffect } from "react";
import RootNavigation from "./components/navigation/RootNavigation";
import StoreContext from "./contexts/StoreContext";
import { Alert } from "react-native";

function App(): React.ReactElement {
  return <RootNavigation />;
}

function ProviderWrapper(): React.ReactElement {
  const FETCH_URL = "http://localhost/rnab/api.json?rand=" + Math.random();
  const [store, setStore] = useState({ fetchData });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(FETCH_URL);
    res
      .json()
      .then((res) => setStore(res))
      .catch((err) => Alert.alert("There is an error when calling the API."));
  }

  return (
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  );
}

export default ProviderWrapper;
