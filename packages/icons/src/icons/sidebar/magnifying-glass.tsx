/**
 * This file was generated automatically by the @medusa-ui/generate-icons CLI.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types";
const MagnifyingGlass = (
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
      d="m17.5 17.5-4.33-4.33m0 0a6.25 6.25 0 1 0-8.84-8.84 6.25 6.25 0 0 0 8.84 8.84v0Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(MagnifyingGlass);
export default ForwardRef;
