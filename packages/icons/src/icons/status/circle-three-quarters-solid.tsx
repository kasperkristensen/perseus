/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types";
const CircleThreeQuartersSolid = (
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
    <circle cx={10} cy={10} r={7.25} stroke={color} strokeWidth={1.5} />
    <path d="M10 15a5 5 0 0 0 0-10v5H5c0 2.739 2.31 5 5 5Z" fill={color} />
  </svg>
);
const ForwardRef = forwardRef(CircleThreeQuartersSolid);
export default ForwardRef;
