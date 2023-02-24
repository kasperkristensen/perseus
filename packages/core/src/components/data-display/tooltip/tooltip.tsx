import * as React from "react";
import { Base, BaseProps } from "./base";

type Props = BaseProps & {
  content: string;
};

export const Tooltip = React.forwardRef(({ content, children }: Props, ref) => {
  return (
    <Base usage="standard" content={content}>
      {children}
    </Base>
  );
});

Tooltip.displayName = "Tooltip";
