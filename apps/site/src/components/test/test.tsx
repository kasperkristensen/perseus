import { Box } from "@medusa-ui/core";
import React from "react";
import * as styles from "./test.css";

type Props = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

export const TestButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...rest }, ref) => {
    const onClick = (event: React.MouseEvent) => {
      console.log("HELLO WORLD");
    };

    return (
      <Box
        as="button"
        ref={ref}
        className={styles.button}
        {...rest}
        onClick={onClick}
      >
        {children}
      </Box>
    );
  }
);

TestButton.displayName = "TestButton";
