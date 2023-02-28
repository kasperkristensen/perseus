/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types";
const De = (
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
    <path d="M4 11.5h12v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z" fill="#FFCE00" />
    <path d="M4 6.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2H4v-2Z" fill="#000" />
    <path d="M4 8.5h12v3H4v-3Z" fill="#D00" />
  </svg>
);
const ForwardRef = forwardRef(De);
export default ForwardRef;
