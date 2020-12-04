import React from "react";
import LoaderContext from "../../contexts/LoaderContext";
import Home from "../../components/screens/Home";

function renderError(load) {
  return (
    <LoaderContext.Provider value={load}>
      <Home />
    </LoaderContext.Provider>
  );
}

test("Test Error", async () => {
  renderError(true);
});
