import { createTheme } from "@medusa-ui/core";

export const myTheme = createTheme({
  displayName: "My Theme",
  identifier: "my-theme",
  base: "light",
  overrides: {
    buttons: {
      buttonPrimary: "red",
    },
  },
});
