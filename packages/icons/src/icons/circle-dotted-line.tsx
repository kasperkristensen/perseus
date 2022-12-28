/**
 * This file was generated automatically by the @perseus/generate-icons CLI.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../types";
const CircleDottedLine = (
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
    <path
      d="M12.5 2.936a7.387 7.387 0 0 0-5 0M2.63 8.632a7.484 7.484 0 0 1 2.5-4.33M5.13 15.698a7.485 7.485 0 0 1-2.5-4.33M7.5 17.064a7.387 7.387 0 0 0 5 0M17.37 8.632a7.484 7.484 0 0 0-2.501-4.33M14.869 15.698a7.485 7.485 0 0 0 2.5-4.33"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(CircleDottedLine);
export default ForwardRef;