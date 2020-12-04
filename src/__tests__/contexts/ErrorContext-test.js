import React from "react";
import ErrorContext from "../../contexts/ErrorContext";
import Home from "../../components/screens/Home";

function renderError(error) {
  return (
    <ErrorContext.Provider value={error}>
      <Home />
    </ErrorContext.Provider>
  );
}

test("Test Error", async () => {
  renderError("error");
});
