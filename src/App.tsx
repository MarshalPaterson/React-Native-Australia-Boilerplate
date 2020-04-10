import React from "react";
import RootNavigation from "./components/navigation/RootNavigation";
import StoreContext from "./contexts/StoreContext";

function App(): React.ReactElement {
  return <RootNavigation />;
}

function ProviderWrapper(): React.ReactElement {
  
  const Store = { name: "Tania", loggedIn: true };

  return (
    <StoreContext.Provider value={Store}>
      <App />
    </StoreContext.Provider>
  );
}

export default ProviderWrapper;
