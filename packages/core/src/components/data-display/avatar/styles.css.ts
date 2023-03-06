import { style, Variants, variants } from "../../../lib"

export const avatar = variants(({ theme, css }) => ({
  base: [
    {
      overflow: "hidden",
      border: "1px solid",
      borderColor: theme.colors.borders.borderStrong,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    css({
      borderRadius: "circle",
    }),
  ],
  variants: {
    size: {
      large: [
        {
          padding: "3px",
        },
        css({
          width: "xlarge",
          height: "xlarge",
        }),
      ],
    },
  },
  defaultVariants: {
    size: "large",
  },
}))

export const inner = style(({ theme, css }) => [
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.backgrounds.bgComponent,
  },
  css({
    borderRadius: "circle",
  }),
])

export const image = style(({ css }) => [
  {
    objectFit: "cover",
    objectPosition: "center",
  },
  css({
    borderRadius: "circle",
    w: "full",
    h: "full",
  }),
])

export const fallback = style(({ theme, css }) => [
  {
    backgroundColor: theme.colors.borders.borderStrong,
  },
  css({
    borderRadius: "circle",
    w: "full",
    h: "full",
  }),
])

export type AvatarVariants = Variants<typeof avatar>
