import React from "react";
import renderer from "react-test-renderer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Version from "../../../components/common/Version";

jest.useFakeTimers();

test("renders correctly", async () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <Version text="1.0.1" />
      </SafeAreaProvider>
    )
    .toJSON();
  //expect(tree).toMatchSnapshot();
});
