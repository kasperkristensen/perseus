import { style } from "@medusa-ui/core"
import { globalStyle } from "@vanilla-extract/css"

export const app = style(({ theme }) => ({
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  color: theme.colors.texts.textPrimary,
  backgroundColor: theme.colors.backgrounds.bgSubtle,
  margin: 0,
  width: "100vw",
  minHeight: "100vh",
}))

globalStyle("Body", {
  margin: 0,
})
