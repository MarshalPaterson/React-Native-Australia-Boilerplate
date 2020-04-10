/**
 * @format
 */

import { AppRegistry, YellowBox } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Module RCTImageLoader",
]);

AppRegistry.registerComponent(appName, () => App);
