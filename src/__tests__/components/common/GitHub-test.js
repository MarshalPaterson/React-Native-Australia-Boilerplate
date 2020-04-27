import React from "react";
import renderer from "react-test-renderer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GitHub from "../../../components/common/GitHub";

jest.useFakeTimers();

test("renders correctly", async () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <GitHub />
      </SafeAreaProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
