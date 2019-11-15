module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/test/setupEnzyme.ts"],
  testMatch: ["**/?(*.)+(test).[t]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "dist"], //
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json"
    }
  }
};
