import { style, variants, Variants } from "../../../lib"

export const buttonColors = variants(({ theme }) => ({
  variants: {
    variant: {
      primary: {
        backgroundColor: theme.colors.buttons.buttonPrimary,
        color: theme.colors.texts.textOnColor,
        ":hover": {
          backgroundColor: theme.colors.buttons.buttonPrimaryHover,
        },
        ":focus": {},
        ":active": {
          backgroundColor: theme.colors.buttons.buttonPrimaryPressed,
        },
      },
      secondary: {
        border: "1px solid",
        borderColor: theme.colors.borders.borderBase,
        backgroundColor: theme.colors.buttons.buttonSecondary,
        color: theme.colors.texts.textPrimary,
        ":hover": {
          backgroundColor: theme.colors.buttons.buttonSecondaryHover,
        },
        ":focus": {},
        ":active": {
          backgroundColor: theme.colors.buttons.buttonSecondaryPressed,
        },
      },
      tertiary: {
        borderColor: theme.colors.borders.borderBase,
        backgroundColor: theme.colors.buttons.buttonTertiary,
        color: theme.colors.texts.textOnColor,
        ":hover": {
          backgroundColor: theme.colors.buttons.buttonTertiaryHover,
        },
        ":focus": {},
        ":active": {
          backgroundColor: theme.colors.buttons.buttonTertiaryPressed,
        },
      },
      danger: {
        backgroundColor: theme.colors.buttons.buttonDanger,
        color: theme.colors.texts.textOnColor,
        ":hover": {
          backgroundColor: theme.colors.buttons.buttonDangerHover,
        },
        ":focus": {},
        ":active": {
          backgroundColor: theme.colors.buttons.buttonDangerPressed,
        },
      },
      transparent: {
        backgroundColor: theme.colors.buttons.buttonTransparent,
        color: theme.colors.texts.textPrimary,
        ":hover": {
          backgroundColor: theme.colors.buttons.buttonTransparentHover,
        },
        ":focus": {},
        ":active": {
          backgroundColor: theme.colors.buttons.buttonTransparentPressed,
        },
      },
    },
  },
}))

export const button = style(({ css }) => [
  {
    paddingTop: "6px",
    paddingBottom: "6px",
  },
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: "small",
    borderRadius: "mellow",
  }),
])

export type ButtonColorVariants = Variants<typeof buttonColors>
