import { Variants, variants } from "../../../lib"

export const colorVariants = variants(({ theme }) => ({
  base: {
    cursor: "inherit",
  },
  variants: {
    color: {
      primary: {
        color: theme.colors.texts.textPrimary,
      },
      secondary: {
        color: theme.colors.texts.textSecondary,
      },
      placeholder: {
        color: theme.colors.texts.textPlaceholder,
      },
      disabled: {
        color: theme.colors.texts.textDisabled,
      },
      onColor: {
        color: theme.colors.texts.textOnColor,
      },
      interactive: {
        color: theme.colors.texts.textInteractive,
      },
      interactiveHover: {
        color: theme.colors.texts.textInteractiveHover,
      },
      error: {
        color: theme.colors.texts.textError,
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
}))

export type TypographyColorVariants = Variants<typeof colorVariants>
