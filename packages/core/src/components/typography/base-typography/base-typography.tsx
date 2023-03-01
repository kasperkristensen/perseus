import clsx from "clsx"
import * as React from "react"
import { Box, BoxProps } from "../../layout"
import { colorVariants, TypographyColorVariants } from "./styles.css"

// Array of all text type html tags
const allowedElements = [
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "span",
  "div",
  "a",
  "label",
] as const

type BaseTypographyProps = Omit<BoxProps, "as"> &
  TypographyColorVariants & {
    as?: (typeof allowedElements)[number]
  }

export const BaseTypography = React.forwardRef<
  HTMLElement,
  BaseTypographyProps
>(({ color = "primary", className, children, ...rest }, ref) => {
  const combinedClasses = clsx(className, colorVariants({ color }))

  return (
    <Box ref={ref} className={combinedClasses} {...rest}>
      {children}
    </Box>
  )
})

BaseTypography.displayName = "BaseTypography"
