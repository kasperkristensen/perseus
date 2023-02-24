import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const variants = recipe({
  base: [
    {
      display: "flex",
    },
  ],
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
  },
});

export type StackVariants = RecipeVariants<typeof variants>;
