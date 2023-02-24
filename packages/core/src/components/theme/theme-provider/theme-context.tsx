import { createContext, useContext } from "react";
import { Theme } from "../../../lib/types";

export interface IThemeContext {
  theme?: string;
  themes?: Omit<Theme, "className">[];
  enableSystemPreference?: boolean;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
