import { ComplexStyleRule, style as vanillaStyle } from "@vanilla-extract/css"
import { sprinkles } from "../css"
import { vars } from "../theme"
import { CSSFn, ThemeVariables } from "../types"

type StyleCallback = (args: {
  theme: ThemeVariables
  css: CSSFn
}) => ComplexStyleRule

export function style(callback: StyleCallback, debugId?: string): string
export function style(rule: ComplexStyleRule, debugId?: string): string
export function style(
  callbackOrRule: StyleCallback | ComplexStyleRule,
  debugId?: string,
): string {
  if (typeof callbackOrRule === "function") {
    const styles = callbackOrRule({ theme: vars, css: sprinkles })
    return vanillaStyle(styles, debugId)
  }

  return vanillaStyle(callbackOrRule, debugId)
}
