import { colors, effects } from "@medusa-ui/tokens"

export type Theme = {
  identifier: string
  displayName: string
  className: string
}

export type Mode = "light" | "dark"

export type ColorScheme = {
  [key in keyof typeof colors as key extends `${string}Dark` ? never : key]: {
    [nestedKey in keyof (typeof colors)[key]]: string
  }
}

export type Effects = {
  [key in keyof typeof effects as key extends `${string}Dark` ? never : key]: {
    [nestedKey in keyof (typeof effects)[key]]: string
  }
}

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends { [key: string]: unknown }
    ? DeepPartial<T[K]> & { [key: string]: unknown }
    : T[K]
}

export type ThemeOptions = {
  /**
   * A unique identifier for the theme.
   */
  identifier: string
  /**
   * The display name of the theme.
   */
  displayName: string
  /**
   * The color base of the theme.
   * @default "light"
   */
  base?: Mode
  /**
   * Allows you to override the default color tokens.
   */
  overrides?: DeepPartial<ColorScheme>
}
