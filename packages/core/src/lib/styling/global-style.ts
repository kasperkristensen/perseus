import {
  globalStyle as vanillaGlobalStyle,
  GlobalStyleRule,
} from "@vanilla-extract/css"
import { sprinkles } from "../css"
import { vars } from "../theme"
import { CSSFn, ThemeVariables } from "../types"

type StyleCallback = (args: {
  theme: ThemeVariables
  css: CSSFn
}) => GlobalStyleRule

export function globalStyle(selector: string, callback: StyleCallback): void
export function globalStyle(selector: string, rule: GlobalStyleRule): void
export function globalStyle(
  selector: string,
  callbackOrRule: StyleCallback | GlobalStyleRule,
): void {
  if (typeof callbackOrRule === "function") {
    const styles = callbackOrRule({ theme: vars, css: sprinkles })
    return vanillaGlobalStyle(selector, styles)
  }

  return vanillaGlobalStyle(selector, callbackOrRule)
}
