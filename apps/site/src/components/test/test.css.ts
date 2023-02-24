import { sprinkles, vars } from "@medusa-ui/core";
import { style } from "@vanilla-extract/css";

export const button = style([
  {
    background: vars.colors.buttons.buttonPrimary,
    color: vars.colors.texts.textOnColor,
    ":hover": {
      background: vars.colors.buttons.buttonPrimaryHover,
    },
    ":active": {
      background: vars.colors.buttons.buttonPrimaryPressed,
    },
    border: "none",
  },
  sprinkles({
    px: "base",
    py: "small",
    borderRadius: "mellow",
  }),
]);
