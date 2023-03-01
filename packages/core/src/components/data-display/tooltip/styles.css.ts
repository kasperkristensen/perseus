import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { sprinkles, vars } from "../../../lib"

export const variants = recipe({
  base: [
    {
      backgroundColor: vars.colors.tags.tagNeutralBg,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: vars.colors.tags.tagNeutralBorder,
      color: vars.colors.tags.tagNeutralText,
      boxShadow: vars.effects.shadows.overlay,
    },
    sprinkles({ borderRadius: "mellow" }),
  ],
  variants: {
    usage: {
      standard: sprinkles({ px: "base", py: "xsmall" }),
      actionable: sprinkles({ px: "base", py: "base" }),
      user: sprinkles({ px: "base", py: "small" }),
      shortcut: sprinkles({ px: "xsmall", py: "xsmall" }),
    },
  },
})

export type TooltipVariants = RecipeVariants<typeof variants>
