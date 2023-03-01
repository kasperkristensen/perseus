import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { sprinkles } from "../../../lib"

export const iconButton = recipe({
  base: [
    {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    sprinkles({
      borderRadius: "mellow",
    }),
  ],
  variants: {
    size: {
      base: [
        sprinkles({
          w: "xlarge",
          h: "xlarge",
        }),
      ],
    },
  },
})

export type IconButtonVariants = RecipeVariants<typeof iconButton>
