import clsx from "clsx"
import * as React from "react"
import { BoxProps } from "../../layout"
import { Typography, TypographyColorVariants } from "../base-typography"
import { body, BodyVariants } from "./styles.css"

const allowedElements = ["p", "span", "div", "a"] as const

type Props = {
  as?: (typeof allowedElements)[number]
} & TypographyColorVariants &
  BodyVariants &
  Omit<BoxProps, "as" | "size">

export const Body = React.forwardRef<HTMLElement, Props>(
  (
    {
      as = "p",
      size = "regular",
      weight = "regular",
      color = "primary",
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const combinedClasses = clsx(className, body({ size, weight }))

    return (
      <Typography
        as={as}
        ref={ref}
        color={color}
        className={combinedClasses}
        {...rest}
      >
        {children}
      </Typography>
    )
  },
)

Body.displayName = "Body"
