import { colors } from "@medusa-ui/tokens";
import { ColorScheme, Mode } from "./types";

export const createDefaultSchema = (mode: Mode): ColorScheme => {
  if (mode === "light") {
    const defaultLightTheme = Object.keys(colors).reduce((acc, key) => {
      if (!key.endsWith("Dark")) {
        let fixedKey = key === "text" ? "texts" : key;

        acc[fixedKey] = colors[key as keyof typeof colors];
      }

      return acc;
    }, {} as Record<string, Record<string, string>>);

    return defaultLightTheme as ColorScheme;
  } else {
    const defaultDarkTheme = Object.keys(colors).reduce((acc, key) => {
      if (key.endsWith("Dark")) {
        const lightKey = key.replace("Dark", "");
        let fixedKey = lightKey === "text" ? "texts" : lightKey;

        acc[fixedKey] = colors[key as keyof typeof colors];
      }

      return acc;
    }, {} as Record<string, Record<string, string>>);

    return defaultDarkTheme as ColorScheme;
  }
};
