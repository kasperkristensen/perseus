/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */
import * as React from "react"
import { Ref, forwardRef } from "react"
import type { IconProps } from "../../types"
const EllipsisVertical = (
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
      d="M10 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0 5.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm.53 5.72a.75.75 0 1 1-1.06 1.06.75.75 0 0 1 1.06-1.06Z"
      stroke={color}
      strokeWidth={1.5}
    />
  </svg>
)
const ForwardRef = forwardRef(EllipsisVertical)
export default ForwardRef
