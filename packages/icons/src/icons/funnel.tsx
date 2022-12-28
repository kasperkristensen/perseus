/**
 * This file was generated automatically by the @perseus/generate-icons CLI.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../types";
const Funnel = (
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
      d="M10 2.5c2.296 0 4.546.193 6.736.565a.922.922 0 0 1 .764.913v.87a1.876 1.876 0 0 1-.55 1.326l-4.526 4.527a1.875 1.875 0 0 0-.549 1.326v2.439a1.875 1.875 0 0 1-1.037 1.677L8.125 17.5v-5.473a1.875 1.875 0 0 0-.55-1.326L3.05 6.174A1.875 1.875 0 0 1 2.5 4.848v-.87c0-.45.32-.838.764-.913A40.266 40.266 0 0 1 10 2.5v0Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(Funnel);
export default ForwardRef;
