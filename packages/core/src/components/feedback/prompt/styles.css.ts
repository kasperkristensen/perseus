import { style, variants } from "../../../lib"

export const prompt = style(({ theme, css }) => [
  {
    width: "400px",
    boxShadow: theme.effects.shadows.overlay,
    border: "1px solid",
    borderColor: theme.colors.borders.borderBase,
    backgroundColor: theme.colors.backgrounds.bgBase,
  },
  css({
    borderRadius: "mellow",
  }),
])

export const header = variants(({ css }) => ({
  base: [
    css({
      px: "large",
      pt: "large",
    }),
  ],
  variants: {
    hasConfirmation: {
      true: css({
        pb: "large",
      }),
      false: {},
    },
  },
  defaultVariants: {
    hasConfirmation: false,
  },
}))

export const footer = variants(({ css, theme }) => ({
  base: [
    css({
      px: "large",
      pb: "large",
      pt: "base",
    }),
  ],
  variants: {
    hasConfirmation: {
      true: {
        borderTop: "1px solid",
        borderColor: theme.colors.borders.borderBase,
      },
      false: {},
    },
  },
  defaultVariants: {
    hasConfirmation: false,
  },
}))

export const extraConfirmation = style(({ css, theme }) => [
  {
    borderTop: "1px solid",
    borderColor: theme.colors.borders.borderBase,
  },
  css({
    p: "large",
  }),
])
