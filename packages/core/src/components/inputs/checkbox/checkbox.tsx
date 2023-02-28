import { CheckMini, MinusMini } from "@medusa-ui/icons";
import * as Primitive from "@radix-ui/react-checkbox";
import clsx from "clsx";
import * as React from "react";
import { Box } from "../../layout";
import {
  checkbox,
  checkmark,
  iconContainer,
  indeterminate,
} from "./styles.css";

export type CheckboxProps = Omit<Primitive.CheckboxProps, "asChild">;

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, type = "button", ...rest }, forwardedRef) => {
    const combinedClasses = clsx(checkbox, className);

    return (
      <Primitive.Root {...rest} ref={forwardedRef} asChild>
        <Box className={combinedClasses} as="button" type={type}>
          <Primitive.Indicator asChild>
            <Box className={iconContainer}>
              <MinusMini className={indeterminate} />
              <CheckMini className={checkmark} />
            </Box>
          </Primitive.Indicator>
        </Box>
      </Primitive.Root>
    );
  }
);

Checkbox.displayName = "Checkbox";
