import { style } from "../../../lib"

export const track = style(({ theme, css }) => [
  {
    display: "flex",
    position: "relative",
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: theme.colors.backgrounds.bgToggleOff,
    alignItems: "center",
    width: "32px",
    height: "18px",

    ":focus": {
      boxShadow: theme.effects.shadows.focus,
    },

    selectors: {
      '&[data-state="checked"]': {
        backgroundColor: theme.colors.backgrounds.bgInteractive,
      },
      "&[data-disabled]": {
        backgroundColor: theme.colors.backgrounds.bgToggleOff,
      },
    },
  },
  css({
    borderRadius: "circle",
  }),
])

export const thumb = style(({ theme, css }) => [
  {
    backgroundColor: theme.colors.icons.iconOnColor,
    transition: "transform 100ms",
    transform: "translateX(0)",
    willChange: "transform",
    selectors: {
      '&[data-state="checked"]': { transform: "translateX(14px)" },
      "&[data-disabled]": {
        backgroundColor: theme.colors.icons.iconPlaceholder,
      },
    },
  },
  css({
    w: "xsmall",
    h: "xsmall",
    borderRadius: "circle",
  }),
])
