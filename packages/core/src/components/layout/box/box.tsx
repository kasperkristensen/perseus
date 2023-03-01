import clsx, { ClassValue } from "clsx"
import * as React from "react"
import { atoms, Atoms, sprinkles } from "../../../lib"

interface BoxBaseProps extends Omit<Atoms, "reset"> {
  className?: ClassValue
}

export interface BoxProps
  extends BoxBaseProps,
    Omit<
      React.AllHTMLAttributes<HTMLElement>,
      "width" | "height" | "size" | "className" | "data" | "as"
    > {
  as?: React.ElementType
}

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ as = "div", className, ...rest }, ref) => {
    const atomProps: Record<string, unknown> = {}
    const nativeProps: Record<string, unknown> = {}

    for (const key in rest) {
      if (sprinkles.properties.has(key as keyof Omit<Atoms, "reset">)) {
        atomProps[key] = rest[key as keyof typeof rest]
      } else {
        nativeProps[key] = rest[key as keyof typeof rest]
      }
    }

    const userClasses = clsx(className)

    const atomicClasses = atoms({
      reset: typeof as === "string" ? as : "div",
      ...atomProps,
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
