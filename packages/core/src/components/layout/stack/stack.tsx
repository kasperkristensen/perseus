import * as React from "react";
import { Box, BoxProps } from "../box";
import { StackVariants, variants } from "./styles.css";

const validElements = ["div", "ul", "ol", "dl", "section", "article"] as const;

type Props = BoxProps & StackVariants;

/**
 * A stack is a layout component that arranges its children in a row or column.
 */
export const Stack = React.forwardRef<HTMLDivElement, Props>(
  ({ as = "div", direction = "row", children, ...rest }, ref) => {
    return (
      <Box ref={ref} as={as} className={variants({ direction })} {...rest}>
        {children}
      </Box>
    );
  }
);

Stack.displayName = "Stack";
