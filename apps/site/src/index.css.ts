import { vars } from "@medusa-ui/core"
import { globalStyle, style } from "@vanilla-extract/css"

export const app = style({
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  color: vars.colors.texts.textPrimary,
  backgroundColor: vars.colors.backgrounds.bgSubtle,
  margin: 0,
  width: "100vw",
  minHeight: "100vh",
})

globalStyle("Body", {
  margin: 0,
})
