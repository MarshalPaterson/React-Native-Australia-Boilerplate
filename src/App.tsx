import React from "react";
import RootNavigation from "./components/navigation/RootNavigation";
import UserContext from "./contexts/UserContext";

function App(): React.ReactElement {
  return <RootNavigation />;
}

function ProviderWrapper(): React.ReactElement {
  const user = { name: "Tania", loggedIn: true };

  return (
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
  );
}

export default ProviderWrapper;
