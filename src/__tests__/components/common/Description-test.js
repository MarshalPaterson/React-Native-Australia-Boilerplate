import React from "react";
import renderer from "react-test-renderer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Description from "../../../components/common/Description";

jest.useFakeTimers();

test("renders correctly", async () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <Description text="The text" />
      </SafeAreaProvider>
    )
    .toJSON();
  //expect(tree).toMatchSnapshot();
});
