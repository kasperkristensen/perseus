/**
 * This file was generated automatically by the @perseus/generate-icons CLI.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../types";
const Circle12Solid = (
  { color = "currentColor", ...props }: IconProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <circle cx={10} cy={10} r={7.25} stroke={color} strokeWidth={1.5} />
    <path d="M10 15a5 5 0 0 0 0-10v10Z" fill={color} />
  </svg>
);
const ForwardRef = forwardRef(Circle12Solid);
export default ForwardRef;
