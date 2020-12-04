import React from "react";
import renderer from "react-test-renderer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import About from "../../../components/screens/About";

jest.useFakeTimers();

it("renders correctly", async () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <About />
      </SafeAreaProvider>
    )
    .toJSON();
    //expect(tree).toMatchSnapshot();
});


