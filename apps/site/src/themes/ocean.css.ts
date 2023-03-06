import { createTheme } from "@medusa-ui/core"

export const ocean = createTheme({
  displayName: "Ocean",
  identifier: "ocean",
  base: "light",
  overrides: {
    backgrounds: {
      bgBase: "#76b6c4",
      bgSubtle: "#064273",
    },
  },
})
