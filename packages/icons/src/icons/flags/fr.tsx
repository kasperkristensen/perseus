/**
 * This file was generated automatically by the @perseus/generate-icons CLI.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types";
const Fr = (
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
      <path d="M4 5.5h12v9H4v-9Z" fill="#fff" />
      <path d="M4 5.5h4v9H4v-9Z" fill="#00267F" />
      <path d="M12 5.5h4v9h-4v-9Z" fill="#F31830" />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <rect x={4} y={5.5} width={12} height={9} rx={1} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(Fr);
export default ForwardRef;