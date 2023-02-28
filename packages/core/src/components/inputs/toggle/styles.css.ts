import { style } from "@vanilla-extract/css";
import { sprinkles, vars } from "../../../lib";

export const track = style(
  [
    {
      display: "flex",
      position: "relative",
      paddingLeft: "5px",
      paddingRight: "5px",
      backgroundColor: vars.colors.backgrounds.bgToggleOff,
      alignItems: "center",
      width: "32px",
      height: "18px",

      ":focus": {
        boxShadow: vars.effects.shadows.focus,
      },

      selectors: {
        '&[data-state="checked"]': {
          backgroundColor: vars.colors.backgrounds.bgInteractive,
        },
        "&[data-disabled]": {
          backgroundColor: vars.colors.backgrounds.bgToggleOff,
        },
      },
    },
  ],
  sprinkles({
    borderRadius: "circle",
  })
);

export const thumb = style([
  {
    backgroundColor: vars.colors.icons.iconOnColor,
    transition: "transform 100ms",
    transform: "translateX(0)",
    willChange: "transform",
    selectors: {
      '&[data-state="checked"]': { transform: "translateX(14px)" },
      "&[data-disabled]": {
        backgroundColor: vars.colors.icons.iconPlaceholder,
      },
    },
  },
  sprinkles({
    w: "xsmall",
    h: "xsmall",
    borderRadius: "circle",
  }),
]);
