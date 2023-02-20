import { createTheme as veCreateTheme } from "@vanilla-extract/css";
import merge from "deepmerge";
import { createDefaultSchema } from "../create-default-schema";
import { ColorScheme, Theme, ThemeOptions } from "../types";
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
  });

  return {
    className,
    identifier,
    displayName,
  };
};
