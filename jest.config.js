module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['regenerator-runtime/runtime'],
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
  preset: '@vue/cli-plugin-unit-jest',
};
