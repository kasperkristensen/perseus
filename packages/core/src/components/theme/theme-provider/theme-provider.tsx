import * as React from "react";
import { MEDIA_PREFERS_COLOR_SCHEME } from "../../../lib/constants";
import { darkMode, lightMode } from "../../../lib/themes";
import { Theme } from "../../../lib/types";
import { IThemeContext, ThemeContext } from "./theme-context";
import { disableAnimations } from "./utils/disable-transitions";
import { resolveLocalTheme } from "./utils/resolve-local-theme";
import { resolveSystemPreference } from "./utils/resolve-system-preference";

export type ThemeProviderProps = {
  /**
   * The themes to use in the application
   */
  themes?: Theme[];
  /**
   * The default theme to use if no theme is set in local storage
   */
  defaultTheme?: string;
  /**
   * Enable an theme option that is controlled by the system preference
   * @default true
   */
  enableSystemPreference?: boolean;
  /**
   * Force a theme to be applied. This will override the local storage
   * and system preference settings.
   * @default undefined
   */
  forcedTheme?: string;
  /**
   * The key to use in local storage to store the theme preference.
   * The default is "theme", this might conflict with other applications
   * using the same key. It is recommended to set this to a unique value.
   * @default "theme"
   */
  storageKey?: string;
  /**
   * Disable transitions when changing themes
   * @default false
   */
  disableTransitions?: boolean;
  children?: React.ReactNode;
};

const defaultThemes = [darkMode, lightMode];

const ThemeProvider = ({
  themes = defaultThemes,
  storageKey = "theme",
  forcedTheme,
  enableSystemPreference = true,
  defaultTheme = enableSystemPreference ? "system" : "light",
  disableTransitions = false,
  children,
}: ThemeProviderProps) => {
  const [appliedTheme, setAppliedTheme] = React.useState<string | undefined>(
    themes[0].className
  );

  const [theme, setThemeState] = React.useState<string | undefined>(() =>
    resolveLocalTheme(storageKey, defaultTheme)
  );

  const [resolvedTheme, setResolvedTheme] = React.useState(() =>
    resolveLocalTheme(storageKey)
  );

  const applyTheme = React.useCallback(
    (theme?: string) => {
      let resolved = theme;
      if (!resolved) {
        return;
      }

      if (theme === "system" && enableSystemPreference) {
        resolved = resolveSystemPreference();
      }

      const transition = disableTransitions ? disableAnimations() : null;

      setAppliedTheme(themes.find((t) => t.identifier === resolved)?.className);

      transition?.();
    },
    [disableTransitions, enableSystemPreference, themes]
  );

  const setTheme = React.useCallback(
    (theme: string) => {
      setThemeState(theme);

      try {
        localStorage.setItem(storageKey, theme);
      } catch (_error) {
        // ignore
      }
    },
    [storageKey]
  );

  const mediaCallback = React.useCallback(
    (event: MediaQueryList | MediaQueryListEvent) => {
      const resolvedTheme = resolveSystemPreference(event);
      setResolvedTheme(resolvedTheme);

      if (theme === "system" && enableSystemPreference && !forcedTheme) {
        applyTheme("system");
      }
    },
    [theme, enableSystemPreference, applyTheme, forcedTheme]
  );

  React.useEffect(() => {
    const media = window.matchMedia(MEDIA_PREFERS_COLOR_SCHEME);
    media.addEventListener("change", mediaCallback);

    return () => {
      media.removeEventListener("change", mediaCallback);
    };
  }, [mediaCallback]);

  React.useEffect(() => {
    const handleStorageEvent = (event: StorageEvent) => {
      if (event.key !== storageKey) {
        return;
      }

      const theme = event.newValue || defaultTheme;
      setThemeState(theme);
    };

    window.addEventListener("storage", handleStorageEvent);

    return () => {
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, [defaultTheme, setTheme, storageKey]);

  React.useEffect(() => {
    applyTheme(forcedTheme ?? theme);
  }, [theme, forcedTheme, applyTheme]);

  const value: IThemeContext = React.useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme: theme === "system" ? resolvedTheme : theme,
      themes: enableSystemPreference
        ? [
            ...themes.map((t) => ({
              identifier: t.identifier,
              displayName: t.displayName,
            })),
            { identifier: "system", displayName: "Auto" },
          ]
        : themes.map((t) => ({
            identifier: t.identifier,
            displayName: t.displayName,
          })),
      systemTheme: (enableSystemPreference ? resolvedTheme : undefined) as
        | "dark"
        | "light"
        | undefined,
    }),
    [theme, themes, resolvedTheme, enableSystemPreference, setTheme]
  );

  React.useEffect(() => {
    // add the theme class to the body
    if (appliedTheme) {
      const classNamesToRemove = themes.map((t) => t.className);

      document.body.classList.remove(...classNamesToRemove);
      document.body.classList.add(appliedTheme);
    }
  }, [appliedTheme, themes]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
