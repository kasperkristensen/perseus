import { effects } from "@medusa-ui/tokens";
import { Effects, Mode } from "../types";

export const createDefaultEffects = (mode: Mode): Effects => {
  if (mode === "light") {
    const defaultLightTheme = Object.keys(effects).reduce((acc, key) => {
      if (!key.endsWith("Dark")) {
        acc[key] = effects[key as keyof typeof effects];
      }

      return acc;
    }, {} as Record<string, Record<string, string>>);

    return defaultLightTheme as Effects;
  } else {
    const defaultDarkTheme = Object.keys(effects).reduce((acc, key) => {
      if (key.endsWith("Dark")) {
        const lightKey = key.replace("Dark", "");

        acc[lightKey] = effects[key as keyof typeof effects];
      }

      return acc;
    }, {} as Record<string, Record<string, string>>);

    return defaultDarkTheme as Effects;
  }
};
