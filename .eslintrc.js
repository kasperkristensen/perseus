module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@perseus/eslint-config-perseus"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
