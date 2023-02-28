import { style } from "@vanilla-extract/css";
import { sprinkles, vars } from "../../../lib";

export const iconContainer = style([
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sprinkles({
    w: "full",
    h: "full",
  }),
]);

export const checkmark = style({
  display: "none",
  selectors: {
    '[data-state="checked"] > &': {
      display: "block",
    },
  },
});

export const indeterminate = style({
  display: "none",
  selectors: {
    '[data-state="indeterminate"] > &': {
      display: "block",
    },
  },
});

export const checkbox = style([
  {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: vars.colors.backgrounds.bgBase,
    border: "1px solid",
    borderColor: vars.colors.borders.borderBase,
    color: vars.colors.icons.iconOnColor,
    ":focus": {
      boxShadow: vars.effects.shadows.focus,
    },
    ":disabled": {
      cursor: "default",
      backgroundColor: vars.colors.backgrounds.bgComponent,
      color: vars.colors.icons.iconDisabled,
    },
    selectors: {
      '&[data-state="checked"]:disabled': {
        backgroundColor: vars.colors.backgrounds.bgComponent,
        color: vars.colors.icons.iconDisabled,
      },
      '&[data-state="checked"]': {
        backgroundColor: vars.colors.backgrounds.bgInteractive,
      },
      '&[data-state="indeterminate"]:disabled': {
        backgroundColor: vars.colors.backgrounds.bgComponent,
        color: vars.colors.icons.iconDisabled,
      },
      '&[data-state="indeterminate"]': {
        backgroundColor: vars.colors.backgrounds.bgInteractive,
      },
    },
  },
  sprinkles({
    w: "medium",
    h: "medium",
    borderRadius: "soft",
  }),
]);
