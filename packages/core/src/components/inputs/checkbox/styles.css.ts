import { style } from "../../../lib"

export const iconContainer = style(({ css }) => [
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    w: "full",
    h: "full",
  }),
])

export const checkmark = style({
  display: "none",
  selectors: {
    '[data-state="checked"] > &': {
      display: "block",
    },
  },
})

export const indeterminate = style({
  display: "none",
  selectors: {
    '[data-state="indeterminate"] > &': {
      display: "block",
    },
  },
})

export const checkbox = style(({ theme, css }) => [
  {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.backgrounds.bgBase,
    border: "1px solid",
    borderColor: theme.colors.borders.borderBase,
    color: theme.colors.icons.iconOnColor,
    ":focus": {
      boxShadow: theme.effects.shadows.focus,
    },
    ":disabled": {
      cursor: "default",
      backgroundColor: theme.colors.backgrounds.bgComponent,
      color: theme.colors.icons.iconDisabled,
    },
    selectors: {
      '&[data-state="checked"]:disabled': {
        backgroundColor: theme.colors.backgrounds.bgComponent,
        color: theme.colors.icons.iconDisabled,
      },
      '&[data-state="checked"]': {
        backgroundColor: theme.colors.backgrounds.bgInteractive,
      },
      '&[data-state="indeterminate"]:disabled': {
        backgroundColor: theme.colors.backgrounds.bgComponent,
        color: theme.colors.icons.iconDisabled,
      },
      '&[data-state="indeterminate"]': {
        backgroundColor: theme.colors.backgrounds.bgInteractive,
      },
    },
  },
  css({
    w: "medium",
    h: "medium",
    borderRadius: "soft",
  }),
])
