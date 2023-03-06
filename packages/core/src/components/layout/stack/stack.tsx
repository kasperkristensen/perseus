import clsx from "clsx"
import * as React from "react"
import { Box, BoxProps } from "../box"
import { StackVariants, variants } from "./styles.css"

export type StackProps = BoxProps & StackVariants

/**
 * A stack is a layout component that arranges its children in a row or column.
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ as = "div", direction = "row", children, className, ...rest }, ref) => {
    const combinedClasses = clsx(variants({ direction }), className)

    return (
      <Box ref={ref} as={as} className={combinedClasses} {...rest}>
        {children}
      </Box>
    )
  },
)

Stack.displayName = "Stack"
