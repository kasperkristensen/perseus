/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */
import * as React from "react"
import { Ref, forwardRef } from "react"
import type { IconProps } from "../../types"
const Envelope = (
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
      d="M17.563 5.928v8.144a1.745 1.745 0 0 1-1.746 1.745H4.183a1.745 1.745 0 0 1-1.745-1.745V5.928m15.124 0a1.745 1.745 0 0 0-1.745-1.745H4.183a1.745 1.745 0 0 0-1.745 1.745m15.124 0v.188a1.745 1.745 0 0 1-.83 1.487l-5.817 3.58a1.745 1.745 0 0 1-1.83 0l-5.818-3.58a1.745 1.745 0 0 1-.83-1.486v-.19"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const ForwardRef = forwardRef(Envelope)
export default ForwardRef
