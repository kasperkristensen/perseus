/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types";
const CreditCard = (
  { color = "currentColor", ...props }: IconProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M2.163 7.294h16.674m-16.674.641h16.674M4.729 12.113h5.075M4.73 14.348h2.565m-3.207 2.565h12.826a1.924 1.924 0 0 0 1.924-1.924V6.011a1.924 1.924 0 0 0-1.924-1.924H4.087a1.924 1.924 0 0 0-1.924 1.924v8.978a1.924 1.924 0 0 0 1.924 1.924Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(CreditCard);
export default ForwardRef;
