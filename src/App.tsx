import React, { useState, useEffect } from "react";
import RootNavigation from "./components/navigation/RootNavigation";
import StoreContext from "./contexts/StoreContext";
import LoaderContext from "./contexts/LoaderContext";
import ErrorContext from "./contexts/ErrorContext";
import { Store } from "./types/Store";

function App(): React.ReactElement {
  return <RootNavigation />;
}

function ProviderWrapper(): React.ReactElement {
  const FETCH_URL = "http://localhost:8888/rnab/api.json?rand=" + Math.random();
  const [store, setStore] = useState<Store>({ title: "", version: "", description: "" });
  const [loader, setLoader] = useState({ show: true });
  const [error, setError] = useState({ message: "", show: false });

  useEffect(() => {
    setLoader({ show: true });
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(FETCH_URL);
    setError({ message: "", show: false });

    res
      .json()
      .then((res) => {    
        setStore(res);
      })
      .catch((err) =>
        setError({ message: "ERROR: " + err.message, show: true })
      )
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
