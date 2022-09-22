module.exports = {
  testEnvironment: "node",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/support/setupTests.js"],
  coverageDirectory: "./coverage",
  collectCoverage: true,
};
