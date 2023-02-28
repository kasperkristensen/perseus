import clsx from "clsx";
import * as React from "react";
import { Box } from "../../layout";
import { buttonColors, ButtonColorVariants } from "../button/styles.css";
import { iconButton, IconButtonVariants } from "./styles.css";

export type IconButtonProps = React.ComponentPropsWithoutRef<"button"> &
  ButtonColorVariants &
  IconButtonVariants;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { children, className, variant = "primary", size = "base", ...props },
    forwardedRef
  ) => {
    const combinedClasses = clsx(
      iconButton({ size }),
      buttonColors({ variant }),
      className
    );

    return (
      <Box
        as="button"
        className={combinedClasses}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

IconButton.displayName = "IconButton";
