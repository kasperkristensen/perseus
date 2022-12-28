/**
 * This file was generated automatically by the @perseus/generate-icons CLI.
 * Do not edit this file directly.
 */
import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../types";
const Github = (
  { color = "currentColor", ...props }: IconProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.222c-4.973 0-9 4.028-9 9a8.994 8.994 0 0 0 6.154 8.539c.45.079.619-.191.619-.428 0-.213-.012-.922-.012-1.676-2.261.416-2.846-.551-3.026-1.057-.101-.26-.54-1.058-.923-1.272-.314-.168-.764-.585-.01-.596.708-.011 1.214.652 1.383.923.81 1.36 2.104.978 2.621.742.079-.585.315-.979.574-1.204-2.003-.225-4.095-1.001-4.095-4.443 0-.98.349-1.79.922-2.42-.09-.224-.404-1.147.09-2.384 0 0 .754-.236 2.476.922a8.351 8.351 0 0 1 2.25-.303c.764 0 1.53.1 2.25.303 1.72-1.17 2.475-.922 2.475-.922.495 1.237.18 2.16.09 2.385.573.63.922 1.429.922 2.419 0 3.453-2.104 4.218-4.106 4.443.326.282.607.822.607 1.665 0 1.204-.011 2.171-.011 2.475 0 .237.169.518.619.428A9.014 9.014 0 0 0 19 10.222c0-4.972-4.027-9-9-9Z"
      fill={color}
    />
  </svg>
);
const ForwardRef = forwardRef(Github);
export default ForwardRef;