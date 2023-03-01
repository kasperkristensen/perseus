/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */
import * as React from "react"
import { Ref, forwardRef } from "react"
import type { IconProps } from "../../types"
const ArrowDownLeftMini = (
  { color = "currentColor", ...props }: IconProps,
  ref: Ref<SVGSVGElement>,
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
      d="M8 8.667 4.667 12 8 15.333"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.333 4.667v4.666A2.667 2.667 0 0 1 12.667 12h-8"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const ForwardRef = forwardRef(ArrowDownLeftMini)
export default ForwardRef
