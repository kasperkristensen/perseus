import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "../../../lib";

export const prompt = style([
  {
    width: "400px",
    boxShadow: vars.effects.shadows.overlay,
    border: "1px solid",
    borderColor: vars.colors.borders.borderBase,
    backgroundColor: vars.colors.backgrounds.bgBase,
  },
  sprinkles({
    borderRadius: "mellow",
  }),
]);

export const header = recipe({
  base: [
    sprinkles({
      px: "large",
      pt: "large",
    }),
  ],
  variants: {
    hasConfirmation: {
      true: sprinkles({
        pb: "large",
      }),
      false: {},
    },
  },
  defaultVariants: {
    hasConfirmation: false,
  },
});

export const footer = recipe({
  base: [
    sprinkles({
      px: "large",
      pb: "large",
      pt: "base",
    }),
  ],
  variants: {
    hasConfirmation: {
      true: {
        borderTop: "1px solid",
        borderColor: vars.colors.borders.borderBase,
      },
      false: {},
    },
  },
  defaultVariants: {
    hasConfirmation: false,
  },
});

export const extraConfirmation = style([
  {
    borderTop: "1px solid",
    borderColor: vars.colors.borders.borderBase,
  },
  sprinkles({
    p: "large",
  }),
]);
