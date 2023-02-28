/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types";
const Phone = (
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
      d="M8.75 1.25H6.875A1.875 1.875 0 0 0 5 3.125v13.75a1.875 1.875 0 0 0 1.875 1.875h6.25A1.875 1.875 0 0 0 15 16.875V3.125a1.875 1.875 0 0 0-1.875-1.875H11.25m-2.5 0V2.5h2.5V1.25m-2.5 0h2.5m-2.5 15.625h2.5"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(Phone);
export default ForwardRef;