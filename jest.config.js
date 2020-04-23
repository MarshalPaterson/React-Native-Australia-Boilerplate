module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  //collectCoverage: true,
  //coverageDirectory: "__coverage__",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "./__tests__/[^setup].*.js$",
  transformIgnorePatterns: ["/node_modules/(?!react-native)/.+"],
  setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
};
