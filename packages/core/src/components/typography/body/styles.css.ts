import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { vars } from "../../../lib"

const bodyFontFamily = `${vars.typography.body.large.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif`

export const body = recipe({
  base: [
    {
      fontFamily: bodyFontFamily,
    },
  ],
  variants: {
    size: {
      xlarge: {
        fontSize: vars.typography.body.xlarge.fontSize,
        lineHeight: vars.typography.body.xlarge.lineHeight,
        fontWeight: vars.typography.body.xlarge.fontWeight,
        letterSpacing: vars.typography.body.xlarge.letterSpacing,
      },
      large: {
        fontSize: vars.typography.body.large.fontSize,
        lineHeight: vars.typography.body.large.lineHeight,
        fontWeight: vars.typography.body.large.fontWeight,
        letterSpacing: vars.typography.body.large.letterSpacing,
      },
      regular: {
        fontSize: vars.typography.body.regular.fontSize,
        lineHeight: vars.typography.body.regular.lineHeight,
        fontWeight: vars.typography.body.regular.fontWeight,
        letterSpacing: vars.typography.body.regular.letterSpacing,
      },
    },
    weight: {
      regular: {},
      plus: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        size: "xlarge",
        weight: "plus",
      },
      style: {
        fontWeight: vars.typography.body.xlargePlus.fontWeight,
      },
    },
    {
      variants: {
        size: "large",
        weight: "plus",
      },
      style: {
        fontWeight: vars.typography.body.largePlus.fontWeight,
      },
    },
    {
      variants: {
        size: "regular",
        weight: "plus",
      },
      style: {
        fontWeight: vars.typography.body.regularPlus.fontWeight,
      },
    },
  ],
})

export type BodyVariants = RecipeVariants<typeof body>
