import React from "react";
import renderer from "react-test-renderer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Button from "../../../components/common/Button";

jest.useFakeTimers();

test("renders correctly", async () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <Button text="The Title" />
      </SafeAreaProvider>
    )
    .toJSON();
  //expect(tree).toMatchSnapshot();
});
