import React from "react";
import renderer from "react-test-renderer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Title from "../../../components/common/Title";

jest.useFakeTimers();

test("renders correctly", async () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <Title text="The Title" />
      </SafeAreaProvider>
    )
    .toJSON();
  //expect(tree).toMatchSnapshot();
});
