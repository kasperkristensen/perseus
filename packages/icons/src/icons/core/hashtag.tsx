/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */
import * as React from "react"
import { Ref, forwardRef } from "react"
import type { IconProps } from "../../types"
const Hashtag = (
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
      d="M3.333 7.5h13.334M3.333 12.5h13.334M8.333 2.5l-1.666 15M13.333 2.5l-1.666 15"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const ForwardRef = forwardRef(Hashtag)
export default ForwardRef
