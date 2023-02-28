import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "../../../lib";

export const menu = recipe({
  base: [
    {
      backgroundColor: vars.colors.backgrounds.bgBase,
      border: "1px solid",
      borderColor: vars.colors.borders.borderBase,
      boxShadow: vars.effects.shadows.overlay,
    },
    sprinkles({
      py: "xsmall",
      borderRadius: "mellow",
      gap: "xsmall",
    }),
  ],
  variants: {
    variant: {
      default: {
        minWidth: "240px",
        width: "auto",
      },
      sub: {
        minWidth: "160px",
        width: "auto",
      },
    },
  },
});

export const trigger = style({
  outline: "none",
  cursor: "pointer",
});

export const separator = style([
  {
    backgroundColor: vars.colors.borders.borderBase,
    height: "1px",
    width: "100%",
  },
]);

export const item = style([
  {
    cursor: "pointer",
    paddingTop: "6px",
    paddingBottom: "6px",
    backgroundColor: vars.colors.backgrounds.bgBase,
    outline: "none",
    ":hover": {
      backgroundColor: vars.colors.backgrounds.bgBaseHover,
    },
    ":focus": {
      backgroundColor: vars.colors.backgrounds.bgBaseHover,
    },
    ":active": {
      backgroundColor: vars.colors.backgrounds.bgBasePressed,
    },
  },
  sprinkles({
    px: "base",
    borderRadius: "mellow",
    mx: "2xsmall",
  }),
]);

export const iconContainer = style({
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: vars.colors.icons.iconSecondary,
});
