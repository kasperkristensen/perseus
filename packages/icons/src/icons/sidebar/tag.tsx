/**
 * This file was generated automatically by the @perseus/generate-icons CLI.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types";
const Tag = (
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
      d="M7.973 2.5H4.375A1.875 1.875 0 0 0 2.5 4.375v3.598c0 .498.197.975.55 1.326l7.983 7.984c.583.583 1.484.727 2.173.275a15.078 15.078 0 0 0 4.352-4.352c.452-.69.308-1.59-.275-2.173L9.3 3.05a1.875 1.875 0 0 0-1.327-.55Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6h.006v.006H6V6Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(Tag);
export default ForwardRef;