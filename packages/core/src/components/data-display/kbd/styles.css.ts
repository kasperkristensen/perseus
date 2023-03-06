import { variants, Variants } from "../../../lib"

export const kbd = variants(({ theme }) => ({
  variants: {
    variant: {
      default: {
        backgroundColor: theme.colors.tags.tagNeutralBg,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: theme.colors.tags.tagNeutralBorder,
        color: theme.colors.tags.tagNeutralText,
      },
      ghost: {
        color: theme.colors.texts.textPlaceholder,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "small",
    },
  },
}))

export type KbdVariants = Variants<typeof kbd>
