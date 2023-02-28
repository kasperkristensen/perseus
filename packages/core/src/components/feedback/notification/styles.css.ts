import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "../../../lib";

export const icon = recipe({
  base: [
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "fit-content",
      width: "fit-content",
    },
  ],
  variants: {
    variant: {
      info: {
        color: vars.colors.support.supportInfo,
      },
      success: {
        color: vars.colors.support.supportSuccess,
      },
      warning: {
        color: vars.colors.support.supportWarning,
      },
      error: {
        color: vars.colors.support.supportError,
      },
    },
  },
});

export type NotificationVariants = RecipeVariants<typeof icon>;

export const notification = style([
  {
    backgroundColor: vars.colors.backgrounds.bgBase,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: vars.colors.borders.borderBase,
    boxShadow: vars.effects.shadows.overlay,
    width: "320px",
  },
  sprinkles({
    p: "base",
    borderRadius: "mellow",
  }),
]);
