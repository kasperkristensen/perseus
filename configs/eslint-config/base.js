module.exports = {
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "turbo",
    "airbnb-typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  ignorePatterns: [
    "**/*.js",
    "**/*.json",
    "node_modules",
    "public",
    "styles",
    "coverage",
    "dist",
    ".turbo",
  ],
}
