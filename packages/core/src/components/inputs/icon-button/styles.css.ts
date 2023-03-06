import { Variants, variants } from "../../../lib"

export const iconButton = variants(({ css }) => ({
  base: [
    {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    css({
      borderRadius: "mellow",
    }),
  ],
  variants: {
    size: {
      base: [
        css({
          w: "xlarge",
          h: "xlarge",
        }),
      ],
    },
  },
}))

export type IconButtonVariants = Variants<typeof iconButton>
