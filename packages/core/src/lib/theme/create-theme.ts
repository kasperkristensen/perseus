import { typography } from "@medusa-ui/tokens";
import { createTheme as veCreateTheme } from "@vanilla-extract/css";
import merge from "deepmerge";
import { ColorScheme, Theme, ThemeOptions } from "../types";
import { createDefaultEffects } from "../utils/create-default-effects";
import { createDefaultSchema } from "../utils/create-default-schema";
import { vars } from "./vars.css";

/**
 * Creates a theme object that can be consumed by the `ThemeProvider`.
 */
export const createTheme = ({
  identifier,
  displayName,
  base = "light",
  overrides = {},
}: ThemeOptions): Theme => {
  const defaultSchema = createDefaultSchema(base);

  const colorScheme = merge(defaultSchema, overrides) as ColorScheme;

  const className = veCreateTheme(vars, {
    colors: colorScheme,
    typography: {
      body: typography.body,
      heading: typography.headersCore,
      codeBlock: typography.codeBlocks,
      labels: typography.labels,
    },
    effects: createDefaultEffects(base),
  });

  return {
    className,
    identifier,
    displayName,
  };
};
