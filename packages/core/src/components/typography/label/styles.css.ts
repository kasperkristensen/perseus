import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { vars } from "../../../lib"

const labelFontFamily = `${vars.typography.labels.large.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif`

export const label = recipe({
  base: [
    {
      fontFamily: labelFontFamily,
    },
  ],
  variants: {
    size: {
      large: {
        fontSize: vars.typography.labels.large.fontSize,
        lineHeight: vars.typography.labels.large.lineHeight,
        fontWeight: vars.typography.labels.large.fontWeight,
        letterSpacing: vars.typography.labels.large.letterSpacing,
      },
      regular: {
        fontSize: vars.typography.labels.regular.fontSize,
        lineHeight: vars.typography.labels.regular.lineHeight,
        fontWeight: vars.typography.labels.regular.fontWeight,
        letterSpacing: vars.typography.labels.regular.letterSpacing,
      },
      small: {
        fontSize: vars.typography.labels.small.fontSize,
        lineHeight: vars.typography.labels.small.lineHeight,
        fontWeight: vars.typography.labels.small.fontWeight,
        letterSpacing: vars.typography.labels.small.letterSpacing,
      },
      xsmall: {
        fontSize: vars.typography.labels.xsmall.fontSize,
        lineHeight: vars.typography.labels.xsmall.lineHeight,
        fontWeight: vars.typography.labels.xsmall.fontWeight,
        letterSpacing: vars.typography.labels.xsmall.letterSpacing,
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
        size: "large",
        weight: "plus",
      },
      style: {
        fontWeight: vars.typography.labels.largePlus.fontWeight,
      },
    },
    {
      variants: {
        size: "regular",
        weight: "plus",
      },
      style: {
        fontWeight: vars.typography.labels.regularPlus.fontWeight,
      },
    },
    {
      variants: {
        size: "small",
        weight: "plus",
      },
      style: {
        fontWeight: vars.typography.labels.smallPlus.fontWeight,
      },
    },
    {
      variants: {
        size: "xsmall",
        weight: "plus",
      },
      style: {
        fontWeight: vars.typography.labels.xsmallPlus.fontWeight,
      },
    },
  ],
})

export type LabelVariants = RecipeVariants<typeof label>
