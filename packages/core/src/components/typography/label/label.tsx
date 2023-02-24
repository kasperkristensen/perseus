import clsx from "clsx";
import * as React from "react";
import { BoxProps } from "../../layout";
import { Typography, TypographyColorVariants } from "../base-typography";
import { label, LabelVariants } from "./styles.css";

const allowedElements = ["p", "span", "label", "a"] as const;

type Props = {
  as?: typeof allowedElements[number];
} & TypographyColorVariants &
  LabelVariants &
  Omit<BoxProps, "as" | "size">;

export const Label = React.forwardRef<HTMLElement, Props>(
  (
    {
      as = "label",
      size = "regular",
      weight = "regular",
      color = "primary",
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const combinedClasses = clsx(className, label({ size, weight }));

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
    );
  }
);

Label.displayName = "Label";
