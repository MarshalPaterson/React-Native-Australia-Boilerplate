import React from "react";
import renderer from "react-test-renderer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LinkedIn from "../../../components/common/LinkedIn";

jest.useFakeTimers();

test("renders correctly", async () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <LinkedIn />
      </SafeAreaProvider>
    )
    .toJSON();
  //expect(tree).toMatchSnapshot();
});
