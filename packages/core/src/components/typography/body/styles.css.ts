import { variants, Variants } from "../../../lib"

export const body = variants(({ theme }) => ({
  base: [
    {
      fontFamily: `${theme.typography.body.regular.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif`,
    },
  ],
  variants: {
    size: {
      xlarge: {
        fontSize: theme.typography.body.xlarge.fontSize,
        lineHeight: theme.typography.body.xlarge.lineHeight,
        fontWeight: theme.typography.body.xlarge.fontWeight,
        letterSpacing: theme.typography.body.xlarge.letterSpacing,
      },
      large: {
        fontSize: theme.typography.body.large.fontSize,
        lineHeight: theme.typography.body.large.lineHeight,
        fontWeight: theme.typography.body.large.fontWeight,
        letterSpacing: theme.typography.body.large.letterSpacing,
      },
      regular: {
        fontSize: theme.typography.body.regular.fontSize,
        lineHeight: theme.typography.body.regular.lineHeight,
        fontWeight: theme.typography.body.regular.fontWeight,
        letterSpacing: theme.typography.body.regular.letterSpacing,
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
        fontWeight: theme.typography.body.xlargePlus.fontWeight,
      },
    },
    {
      variants: {
        size: "large",
        weight: "plus",
      },
      style: {
        fontWeight: theme.typography.body.largePlus.fontWeight,
      },
    },
    {
      variants: {
        size: "regular",
        weight: "plus",
      },
      style: {
        fontWeight: theme.typography.body.regularPlus.fontWeight,
      },
    },
  ],
}))

export type BodyVariants = Variants<typeof body>
