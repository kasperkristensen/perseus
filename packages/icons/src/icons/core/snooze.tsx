/**
 * This file was generated automatically by the @medusa-ui/generate-icons CLI.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types";
const Snooze = (
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
      d="M11.833 7.894h4.565l-4.153 5.007h4.422M5.833 12.8h3.825l-3.421 4.124h3.641-3.641M3.333 2.867h5.523l-5.11 6.16h5.396"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(Snooze);
export default ForwardRef;
