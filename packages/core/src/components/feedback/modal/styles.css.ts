import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { sprinkles, vars } from "../../../lib"

export const modal = recipe({
  base: [
    {
      boxShadow: vars.effects.shadows.overlay,
      backgroundColor: vars.colors.backgrounds.bgBase,
      border: "1px solid",
      borderColor: vars.colors.borders.borderBase,
      width: "90vw",
      height: "90vh",
      maxWidth: "560px",
      maxHeight: "560px",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    sprinkles({
      borderRadius: "mellow",
    }),
  ],
})

export const header = style([
  {
    borderBottom: "1px solid",
    borderColor: vars.colors.borders.borderBase,
  },
  sprinkles({
    px: "xlarge",
    py: "large",
  }),
])

export const headerAction = style([
  {
    cursor: "pointer",
    color: vars.colors.icons.iconPlaceholder,
    backgroundColor: vars.colors.buttons.buttonTransparent,
    outline: "none",
    ":hover": {
      backgroundColor: vars.colors.buttons.buttonTransparentHover,
    },
    ":focus": {
      backgroundColor: vars.colors.buttons.buttonTransparentHover,
    },
    ":active": {
      backgroundColor: vars.colors.buttons.buttonTransparentPressed,
    },
  },
  sprinkles({
    borderRadius: "mellow",
    justifyContent: "center",
    alignItems: "center",
    w: "xlarge",
    h: "xlarge",
  }),
])

export const overlay = style([
  {
    position: "fixed",
  },
  sprinkles({
    inset: "none",
  }),
])

export const content = style([
  sprinkles({
    px: "xlarge",
    py: "large",
  }),
])

export const footer = style([
  {
    borderTop: "1px solid",
    borderColor: vars.colors.borders.borderBase,
  },
  sprinkles({
    pt: "base",
    pb: "large",
    px: "xlarge",
  }),
])
