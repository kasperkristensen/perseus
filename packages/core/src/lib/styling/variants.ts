import { ComplexStyleRule } from "@vanilla-extract/css"
import { recipe, RuntimeFn } from "@vanilla-extract/recipes"
import { sprinkles } from "../css"
import { vars } from "../theme"
import { CSSFn, ThemeVariables } from "../types"

// Re-implementation of the types from @vanilla-extract/recipes, as they are not exported
type RecipeStyleRule = ComplexStyleRule | string
type VariantDefinitions = Record<string, RecipeStyleRule>
type BooleanMap<T> = T extends "true" | "false" ? boolean : T
type VariantGroups = Record<string, VariantDefinitions>
type VariantSelection<Variants extends VariantGroups> = {
  [VariantGroup in keyof Variants]?: BooleanMap<keyof Variants[VariantGroup]>
}

interface CompoundVariant<Variants extends VariantGroups> {
  variants: VariantSelection<Variants>
  style: RecipeStyleRule
}

type PatternOptions<Variants extends VariantGroups> = {
  base?: RecipeStyleRule
  variants?: Variants
  defaultVariants?: VariantSelection<Variants>
  compoundVariants?: Array<CompoundVariant<Variants>>
}

type VariantCallback<T extends VariantGroups> = (args: {
  theme: ThemeVariables
  css: CSSFn
}) => PatternOptions<T>

export function variants<T extends VariantGroups>(
  patternOptions: PatternOptions<T>,
  debugId?: string,
): RuntimeFn<T>
export function variants<T extends VariantGroups>(
  callback: VariantCallback<T>,
  debugId?: string,
): RuntimeFn<T>
export function variants<T extends VariantGroups>(
  callbackOrPatternOptions: VariantCallback<T> | PatternOptions<T>,
  debugId?: string,
): RuntimeFn<T> {
  if (typeof callbackOrPatternOptions === "function") {
    const patternOptions = callbackOrPatternOptions({
      theme: vars,
      css: sprinkles,
    })
    return recipe(patternOptions, debugId)
  }

  return recipe(callbackOrPatternOptions, debugId)
}
