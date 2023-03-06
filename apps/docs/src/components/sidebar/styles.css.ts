import { sprinkles, vars } from "@medusa-ui/core"
import { style } from "@vanilla-extract/css"

export const sidebar = style([
  {
    backgroundColor: vars.colors.backgrounds.bgBase,
    borderRight: "1px solid",
    borderColor: vars.colors.borders.borderBase,
    width: "256px",
    height: "100vh",
  },
  sprinkles({
    px: "large",
    py: "4xlarge",
  }),
])
