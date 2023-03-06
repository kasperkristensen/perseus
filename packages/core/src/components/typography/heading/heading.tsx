import clsx from "clsx"
import * as React from "react"
import { BoxProps } from "../../layout"
import { Typography, TypographyColorVariants } from "../base-typography"
import { heading } from "./styles.css"

const allowedElements = ["h1", "h2", "h3"] as const

export type HeadingProps = {
  as?: (typeof allowedElements)[number]
} & TypographyColorVariants &
  Omit<BoxProps, "as" | "size">

export const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  ({ as = "h1", color = "primary", className, children, ...rest }, ref) => {
    const combinedClasses = clsx(className, heading({ importance: as }))

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

Heading.displayName = "Heading"
