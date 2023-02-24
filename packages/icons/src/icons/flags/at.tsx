/**
 * This file was generated automatically by the @medusa-ui/generate-icons CLI.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types";
const At = (
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
    <g clipPath="url(#prefix__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M16 14.5H4v-9h12v9Z" fill="#fff" />
      <path d="M16 14.5H4v-3h12v3Zm0-5.998H4v-3h12v3Z" fill="#ED2939" />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <rect x={4} y={5.5} width={12} height={9} rx={1} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(At);
export default ForwardRef;
