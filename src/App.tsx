import React, { useState, useEffect } from "react";
import RootNavigation from "./components/navigation/RootNavigation";
import StoreContext from "./contexts/StoreContext";
import LoaderContext from "./contexts/LoaderContext";
import ErrorContext from "./contexts/ErrorContext";
import { Alert } from "react-native";

function App(): React.ReactElement {
  return <RootNavigation />;
}

function ProviderWrapper(): React.ReactElement {
  const FETCH_URL = "http://localhost/rnab/api.json?rand=" + Math.random();
  const [store, setStore] = useState({ fetchData });
  const [loader, setLoader] = useState({ show: true });
  const [error, setError] = useState({ message: "" });

  useEffect(() => {
    setLoader({ show: true });
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(FETCH_URL);
    res
      .json()
      .then((res) => setStore(res))
      .catch((err) => setError({ message: "ERROR: " + err.message }))
      .finally(() => setLoader({ show: false }));
  }

  return (
    <LoaderContext.Provider value={loader}>
      <ErrorContext.Provider value={error}>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </ErrorContext.Provider>
    </LoaderContext.Provider>
  );
}

export default ProviderWrapper;
