import React from "react";
import renderer from "react-test-renderer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ReactNativeAustralia from "../../../components/common/ReactNativeAustralia";

jest.useFakeTimers();

test("renders correctly", async () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <ReactNativeAustralia />
      </SafeAreaProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
