import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css"

export const globalVars = createGlobalThemeContract({
  font: {
    body: "",
    heading: "",
    mono: "",
  },
  spacing: {
    none: "",
  },
})

createGlobalTheme(":root", globalVars, {
  font: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Inter, sans-serif",
  },
  spacing: {
    none: "0",
  },
})
