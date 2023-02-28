import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "../../../lib";

export const buttonColors = recipe({
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.buttons.buttonPrimary,
        color: vars.colors.texts.textOnColor,
        ":hover": {
          backgroundColor: vars.colors.buttons.buttonPrimaryHover,
        },
        ":focus": {},
        ":active": {
          backgroundColor: vars.colors.buttons.buttonPrimaryPressed,
        },
      },
      secondary: {
        border: "1px solid",
        borderColor: vars.colors.borders.borderBase,
        backgroundColor: vars.colors.buttons.buttonSecondary,
        color: vars.colors.texts.textPrimary,
        ":hover": {
          backgroundColor: vars.colors.buttons.buttonSecondaryHover,
        },
        ":focus": {},
        ":active": {
          backgroundColor: vars.colors.buttons.buttonSecondaryPressed,
        },
      },
      tertiary: {
        borderColor: vars.colors.borders.borderBase,
        backgroundColor: vars.colors.buttons.buttonTertiary,
        color: vars.colors.texts.textOnColor,
        ":hover": {
          backgroundColor: vars.colors.buttons.buttonTertiaryHover,
        },
        ":focus": {},
        ":active": {
          backgroundColor: vars.colors.buttons.buttonTertiaryPressed,
        },
      },
      danger: {
        backgroundColor: vars.colors.buttons.buttonDanger,
        color: vars.colors.texts.textOnColor,
        ":hover": {
          backgroundColor: vars.colors.buttons.buttonDangerHover,
        },
        ":focus": {},
        ":active": {
          backgroundColor: vars.colors.buttons.buttonDangerPressed,
        },
      },
      transparent: {
        backgroundColor: vars.colors.buttons.buttonTransparent,
        color: vars.colors.texts.textPrimary,
        ":hover": {
          backgroundColor: vars.colors.buttons.buttonTransparentHover,
        },
        ":focus": {},
        ":active": {
          backgroundColor: vars.colors.buttons.buttonTransparentPressed,
        },
      },
    },
  },
});

export const button = style([
  {
    paddingTop: "6px",
    paddingBottom: "6px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sprinkles({
    px: "small",
    borderRadius: "mellow",
  }),
]);

export type ButtonColorVariants = RecipeVariants<typeof buttonColors>;
