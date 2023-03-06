const path = require("path")

module.exports = {
  extends: ["@medusa-ui/eslint-config/react", "plugin:storybook/recommended"],
  root: true,
  parserOptions: {
    project: path.resolve(__dirname, "tsconfig.lint.json"),
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.stories.*", "**/.storybook/**/*.*"],
        peerDependencies: true,
      },
    ],
  },
}
