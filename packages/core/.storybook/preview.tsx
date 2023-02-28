import { DecoratorFn } from "@storybook/react";
import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { darkMode, lightMode, ThemeProvider, useTheme } from "../src";

const ThemeListenser = () => {
  const { setTheme } = useTheme();
  const isDarkMode = useDarkMode();

  React.useEffect(() => {
    if (isDarkMode) {
      setTheme(darkMode.identifier);
    } else {
      setTheme(lightMode.identifier);
    }
  }, [setTheme, isDarkMode]);

  return <></>;
};

export const decorators: DecoratorFn[] = [
  (Story) => (
    <ThemeProvider>
      <Story />
      <ThemeListenser />
    </ThemeProvider>
  ),
];

// const lightTheme: typeof themes.light = {
//   ...themes.light,
//   appBg: colors.backgrounds.bgBase,
//   appContentBg: colors.backgrounds.bgSubtle,
//   textColor: colors.texts.textPrimary,
//   appBorderColor: colors.borders.borderStrong,
//   barSelectedColor: colors.borders.borderInteractive,
//   barBg: colors.backgrounds.bgField,
//   barTextColor: colors.texts.textSecondary,
//   textMutedColor: colors.texts.textDisabled,
//   colorPrimary: colors.backgrounds.bgInteractive,
//   colorSecondary: colors.backgrounds.bgInteractive,
// };

// const darkTheme: typeof themes.dark = {
//   ...themes.dark,
//   appBg: colors.backgroundsDark.bgBase,
//   appContentBg: colors.backgroundsDark.bgSubtle,
//   textColor: colors.textsDark.textPrimary,
//   appBorderColor: colors.bordersDark.borderStrong,
//   barSelectedColor: colors.bordersDark.borderInteractive,
//   barBg: colors.backgroundsDark.bgField,
//   barTextColor: colors.textsDark.textSecondary,
//   textMutedColor: colors.textsDark.textDisabled,
//   colorPrimary: colors.backgroundsDark.bgInteractive,
//   colorSecondary: colors.backgroundsDark.bgInteractive,
// };

// export const parameters: Parameters = {
//   darkMode: {
//     dark: darkTheme,
//     light: lightTheme,
//   },
// };
