import React from "react";
import StoreContext from "../../contexts/StoreContext";
import Home from "../../components/screens/Home";

function renderError(store) {
  return (
    <StoreContext.Provider value={store}>
      <Home />
    </StoreContext.Provider>
  );
}

test("Test Error", () => {
  renderError("error");
});
