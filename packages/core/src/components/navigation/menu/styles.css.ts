import { style, variants } from "../../../lib"

export const menu = variants(({ theme, css }) => ({
  base: [
    {
      backgroundColor: theme.colors.backgrounds.bgBase,
      border: "1px solid",
      borderColor: theme.colors.borders.borderBase,
      boxShadow: theme.effects.shadows.overlay,
    },
    css({
      py: "xsmall",
      borderRadius: "mellow",
      gap: "xsmall",
    }),
  ],
  variants: {
    variant: {
      default: {
        minWidth: "240px",
        width: "auto",
      },
      sub: {
        minWidth: "160px",
        width: "auto",
      },
    },
  },
}))

export const trigger = style({
  outline: "none",
  cursor: "pointer",
})

export const separator = style(({ theme }) => [
  {
    backgroundColor: theme.colors.borders.borderBase,
    height: "1px",
    width: "100%",
  },
])

export const item = style(({ theme, css }) => [
  {
    cursor: "pointer",
    paddingTop: "6px",
    paddingBottom: "6px",
    backgroundColor: theme.colors.backgrounds.bgBase,
    outline: "none",
    ":hover": {
      backgroundColor: theme.colors.backgrounds.bgBaseHover,
    },
    ":focus": {
      backgroundColor: theme.colors.backgrounds.bgBaseHover,
    },
    ":active": {
      backgroundColor: theme.colors.backgrounds.bgBasePressed,
    },
  },
  css({
    px: "base",
    borderRadius: "mellow",
    mx: "2xsmall",
  }),
])

export const iconContainer = style(({ theme }) => ({
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.colors.icons.iconSecondary,
}))
