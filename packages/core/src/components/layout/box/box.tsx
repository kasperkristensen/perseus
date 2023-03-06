import clsx, { ClassValue } from "clsx"
import * as React from "react"
import { atoms, Atoms } from "../../../lib"

type CSS = Omit<Atoms, "reset">

export interface BoxProps
  extends Omit<
    React.AllHTMLAttributes<HTMLElement>,
    "width" | "height" | "size" | "className" | "data" | "as"
  > {
  as?: React.ElementType
  className?: ClassValue
  css?: CSS
}

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ as = "div", className, css, ...nativeProps }, ref) => {
    const userClasses = clsx(className)

    const atomicClasses = atoms({
      reset: typeof as === "string" ? as : "div",
      ...css,
    })

    const combinedClasses = `${atomicClasses}${
      userClasses ? ` ${userClasses}` : ""
    }`

    return React.createElement(as, {
      className: combinedClasses,
      ...nativeProps,
      ref,
    })
  },
)

Box.displayName = "Box"
