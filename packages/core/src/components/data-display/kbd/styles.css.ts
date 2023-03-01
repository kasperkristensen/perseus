import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { vars } from "../../../lib"

const kbdFontFamily = `${vars.typography.labels.small.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif`

export const kbd = recipe({
  base: {
    fontFamily: kbdFontFamily,
  },
  variants: {
    variant: {
      default: {
        backgroundColor: vars.colors.tags.tagNeutralBg,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: vars.colors.tags.tagNeutralBorder,
        color: vars.colors.tags.tagNeutralText,
      },
      ghost: {
        color: vars.colors.texts.textPlaceholder,
      },
    },
    size: {
      base: {
        fontSize: vars.typography.labels.smallPlus.fontSize,
        lineHeight: vars.typography.labels.smallPlus.lineHeight,
        fontWeight: vars.typography.labels.smallPlus.fontWeight,
      },
      small: {
        fontSize: vars.typography.labels.xsmallPlus.fontSize,
        lineHeight: vars.typography.labels.xsmallPlus.lineHeight,
        fontWeight: vars.typography.labels.xsmallPlus.fontWeight,
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
  },
})

export type KbdVariants = RecipeVariants<typeof kbd>
