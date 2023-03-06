import clsx from "clsx"
import * as React from "react"
import { Box, BoxProps } from "../../layout"
import { button, buttonColors, ButtonColorVariants } from "./styles.css"

export type ButtonProps = Omit<BoxProps, "as"> & ButtonColorVariants

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, forwardedRef) => {
    const combinedClasses = clsx(button, buttonColors({ variant }), className)

    return (
      <Box
        as="button"
        className={combinedClasses}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Box>
    )
  },
)

Button.displayName = "Button"
