import React from "react";
import renderer from "react-test-renderer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../../../components/screens/Home";

jest.useFakeTimers();

test("renders correctly", async () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
