export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  moduleFileExtensions: ["ts", "js", "tsx", "jsx"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testRegex: "__test__/.+\\.test\\.[jt]sx?$",
};
