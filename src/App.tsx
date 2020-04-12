import React, { useContext, useState, useEffect } from "react";
import RootNavigation from "./components/navigation/RootNavigation";
import StoreContext from "./contexts/StoreContext";

function App(): React.ReactElement {
  return <RootNavigation />;
}

function ProviderWrapper(): React.ReactElement {
  const [hasError, setErrors] = useState(false);
  const [store, setStore] = useState({fetchData});

  useEffect(() => {
    fetchData();
  });

  async function fetchData() {
    const res = await fetch("http://localhost/rnab/api.json?rand=" + Math.random());
    res
      .json()
      .then((res) => setStore(res))
      .catch((err) => setErrors(err));
  }

  return (
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  );
}

export default ProviderWrapper;
