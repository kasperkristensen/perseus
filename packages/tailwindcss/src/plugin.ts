// import { colors } from "@perseus/tokens";
// import plugin from "tailwindcss/plugin";
// import { kebabCaseIdentifier } from "./utils/kebab-case-identifier";

// export interface PluginOptions {
//   /**
//    * Decides the mode of the plugin. If set to "overwrite",
//    * the plugin will overwrite the default TailwindCSS
//    * classes. If set to "extend", the plugin will instead
//    * extend the default theme with the design tokens.
//    * @default "extend"
//    */
//   mode?: "overwrite" | "extend";
//   rootSelector?: string;
// }

// const getDomain = (string: string) => {
//   const [domain] = string.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");

//   return domain;
// };

// const getIdentifier = (string: string) => {
//   const domain = getDomain(string);

//   const identifier = string
//     .replace(domain, "")
//     .replace(/([a-z])([A-Z])/g, "$1-$2")
//     .toLowerCase();

//   return identifier;
// };

// export default plugin.withOptions<Partial<PluginOptions>>(
//   ({ rootSelector = ":root" } = {}) => {
//     let rootColors: Record<string, string> = {};
//     let darkModeColors: Record<string, string> = {};

//     for (const [colorName, colorObj] of Object.entries(colors)) {
//       const colorMap = colorName.includes("Dark") ? darkModeColors : rootColors;
//       for (const [key, value] of Object.entries(colorObj)) {
//         colorMap[`--${kebabCaseIdentifier(key)}`] = value;
//       }
//     }

//     return ({ addBase, config }) => {
//       const [darkMode, className = ".dark"] = ([] as string[]).concat(
//         config("darkMode", "media")
//       );

//       if (darkMode === "class") {
//         addBase({
//           [rootSelector]: rootColors,
//           [className]: darkModeColors,
//         });
//       } else {
//         addBase({
//           [rootSelector]: rootColors,
//           "@media (prefers-color-scheme: dark)": {
//             [rootSelector]: darkModeColors,
//           },
//         });
//       }
//     };
//   },
//   () => {
//     const themeColors: Record<string, Record<string, string>> = {};

//     for (const [colorName, colorObj] of Object.entries(colors)) {
//       if (colorName.includes("Dark")) {
//         continue;
//       }

//       const domain = getDomain(colorName);

//       if (!themeColors[domain]) {
//         themeColors[domain] = {};
//       }

//       themeColors[domain] = Object.keys(colorObj).reduce((acc, key) => {
//         const identifier = getIdentifier(key);
//         acc[identifier] = `var(--${kebabCaseIdentifier(key)})`;
//         return acc;
//       }, {} as Record<string, string>);
//     }

//     return {
//       theme: {
//         extend: {
//           colors: themeColors,
//         },
//       },
//     };
//   }
// );

import { colors } from "@perseus/tokens";
import plugin from "tailwindcss/plugin";
import {
  getDomain,
  getIdentifier,
  kebabCaseIdentifier,
} from "./utils/kebab-case-identifier";

export default plugin.withOptions(
  () => {
    let rootColors: Record<string, string> = {};
    let darkModeColors: Record<string, string> = {};

    for (const [colorName, colorObj] of Object.entries(colors)) {
      const colorMap = colorName.includes("Dark") ? darkModeColors : rootColors;
      for (const [key, value] of Object.entries(colorObj)) {
        colorMap[`--${kebabCaseIdentifier(key)}`] = value;
      }
    }

    return ({ addBase, config }) => {
      const [darkMode, className = ".dark"] = ([] as string[]).concat(
        config("darkMode", "media")
      );

      if (darkMode === "class") {
        addBase({
          ":root": rootColors,
          [className]: darkModeColors,
        });
      } else {
        addBase({
          ":root": rootColors,
          "@media (prefers-color-scheme: dark)": {
            ":root": darkModeColors,
          },
        });
      }
    };
  },
  () => {
    const themeColors: Record<string, Record<string, string>> = {};

    for (const [colorName, colorObj] of Object.entries(colors)) {
      if (colorName.includes("Dark")) {
        continue;
      }

      const domain = getDomain(colorName);

      if (!themeColors[domain]) {
        themeColors[domain] = {};
      }

      themeColors[domain] = Object.keys(colorObj).reduce((acc, key) => {
        const identifier = getIdentifier(key);
        acc[identifier] = `var(--${kebabCaseIdentifier(key)})`;
        return acc;
      }, {} as Record<string, string>);
    }

    return {
      theme: {
        extend: {
          colors: themeColors,
        },
      },
    };
  }
);
