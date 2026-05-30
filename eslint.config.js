// https://docs.expo.dev/guides/using-eslint/
// NOTE: ESLint is pinned to v9 (eslint: ^9.21.0) because ESLint v10 causes configuration
// and plugin crashes (e.g. `TypeError: contextOrFilename.getFilename is not a function`).
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);
