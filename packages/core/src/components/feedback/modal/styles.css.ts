import { style, variants } from "../../../lib"

export const modal = variants(({ theme, css }) => ({
  base: [
    {
      boxShadow: theme.effects.shadows.overlay,
      backgroundColor: theme.colors.backgrounds.bgBase,
      border: "1px solid",
      borderColor: theme.colors.borders.borderBase,
      width: "90vw",
      height: "90vh",
      maxWidth: "560px",
      maxHeight: "560px",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    css({
      borderRadius: "mellow",
    }),
  ],
}))

export const header = style(({ theme, css }) => [
  {
    borderBottom: "1px solid",
    borderColor: theme.colors.borders.borderBase,
  },
  css({
    px: "xlarge",
    py: "large",
  }),
])

export const headerAction = style(({ theme, css }) => [
  {
    cursor: "pointer",
    color: theme.colors.icons.iconPlaceholder,
    backgroundColor: theme.colors.buttons.buttonTransparent,
    outline: "none",
    ":hover": {
      backgroundColor: theme.colors.buttons.buttonTransparentHover,
    },
    ":focus": {
      backgroundColor: theme.colors.buttons.buttonTransparentHover,
    },
    ":active": {
      backgroundColor: theme.colors.buttons.buttonTransparentPressed,
    },
  },
  css({
    borderRadius: "mellow",
    justifyContent: "center",
    alignItems: "center",
    w: "xlarge",
    h: "xlarge",
  }),
])

export const overlay = style(({ css }) => [
  {
    position: "fixed",
  },
  css({
    inset: "none",
  }),
])

export const content = style(({ css }) => [
  css({
    px: "xlarge",
    py: "large",
  }),
])

export const footer = style(({ css, theme }) => [
  {
    borderTop: "1px solid",
    borderColor: theme.colors.borders.borderBase,
  },
  css({
    pt: "base",
    pb: "large",
    px: "xlarge",
  }),
])
