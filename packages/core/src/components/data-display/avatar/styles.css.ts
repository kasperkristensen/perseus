import { style } from "@vanilla-extract/css"
import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { sprinkles, vars } from "../../../lib"

export const avatar = recipe({
  base: [
    {
      overflow: "hidden",
      border: "1px solid",
      borderColor: vars.colors.borders.borderStrong,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    sprinkles({
      borderRadius: "circle",
    }),
  ],
  variants: {
    size: {
      large: [
        {
          padding: "3px",
        },
        sprinkles({
          width: "xlarge",
          height: "xlarge",
        }),
      ],
    },
  },
  defaultVariants: {
    size: "large",
  },
})

export const inner = style([
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: vars.colors.backgrounds.bgComponent,
  },
  sprinkles({
    borderRadius: "circle",
  }),
])

export const image = style([
  {
    objectFit: "cover",
    objectPosition: "center",
  },
  sprinkles({
    borderRadius: "circle",
    w: "full",
    h: "full",
  }),
])

export const fallback = style([
  {
    backgroundColor: vars.colors.borders.borderStrong,
  },
  sprinkles({
    borderRadius: "circle",
    w: "full",
    h: "full",
  }),
])

export type AvatarVariants = RecipeVariants<typeof avatar>
