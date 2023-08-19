import type {Config} from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  globals: {},
  moduleFileExtensions: [
    "js",
    "ts",
  ],
};

export default config;
