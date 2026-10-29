export default [
  {
    ignores: ["tests/**", "jest.config.js"]
  },
  {
    files: ["**/*.js"],
    rules: {
      semi: ["error", "always"]
    }
  }
];
