import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../../../lib";

export const colorVariants = recipe({
  base: {
    cursor: "inherit",
  },
  variants: {
    color: {
      primary: {
        color: vars.colors.texts.textPrimary,
      },
      secondary: {
        color: vars.colors.texts.textSecondary,
      },
      placeholder: {
        color: vars.colors.texts.textPlaceholder,
      },
      disabled: {
        color: vars.colors.texts.textDisabled,
      },
      onColor: {
        color: vars.colors.texts.textOnColor,
      },
      interactive: {
        color: vars.colors.texts.textInteractive,
      },
      interactiveHover: {
        color: vars.colors.texts.textInteractiveHover,
      },
      error: {
        color: vars.colors.texts.textError,
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export type TypographyColorVariants = RecipeVariants<typeof colorVariants>;
