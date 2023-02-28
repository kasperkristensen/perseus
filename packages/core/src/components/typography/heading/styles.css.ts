import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../../../lib";

const headingFontFamily = `${vars.typography.heading.h1.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif`;

export const heading = recipe({
  base: [
    {
      fontFamily: headingFontFamily,
    },
  ],
  variants: {
    importance: {
      h1: {
        fontSize: vars.typography.heading.h1.fontSize,
        lineHeight: vars.typography.heading.h1.lineHeight,
        fontWeight: vars.typography.heading.h1.fontWeight,
        letterSpacing: vars.typography.heading.h1.letterSpacing,
      },
      h2: {
        fontSize: vars.typography.heading.h2.fontSize,
        lineHeight: vars.typography.heading.h2.lineHeight,
        fontWeight: vars.typography.heading.h2.fontWeight,
        letterSpacing: vars.typography.heading.h2.letterSpacing,
      },
      h3: {
        fontSize: vars.typography.heading.h3.fontSize,
        lineHeight: vars.typography.heading.h3.lineHeight,
        fontWeight: vars.typography.heading.h3.fontWeight,
        letterSpacing: vars.typography.heading.h3.letterSpacing,
      },
    },
  },
});

export type HeadingVariants = RecipeVariants<typeof heading>;
