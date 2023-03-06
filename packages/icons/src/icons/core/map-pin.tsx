/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */
import * as React from "react"
import { Ref, forwardRef } from "react"
import type { IconProps } from "../../types"
const MapPin = (
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
      d="M12.5 8.438a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0v0Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.25 8.438c0 5.951-6.25 9.374-6.25 9.374S3.75 14.39 3.75 8.438a6.25 6.25 0 0 1 12.5 0v0Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const ForwardRef = forwardRef(MapPin)
export default ForwardRef
