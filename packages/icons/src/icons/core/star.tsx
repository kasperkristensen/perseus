/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types";
const Star = (
  { color = "currentColor", ...props }: IconProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M9.567 2.916a.468.468 0 0 1 .866 0l1.771 4.259a.468.468 0 0 0 .396.287l4.598.369a.469.469 0 0 1 .268.823l-3.504 3.002a.47.47 0 0 0-.151.464l1.07 4.488a.468.468 0 0 1-.7.508l-3.937-2.404a.47.47 0 0 0-.488 0l-3.938 2.405a.468.468 0 0 1-.7-.509L6.19 12.12a.468.468 0 0 0-.151-.464L2.534 8.654a.47.47 0 0 1 .268-.823L7.4 7.462a.47.47 0 0 0 .396-.287l1.77-4.258v-.001Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(Star);
export default ForwardRef;
