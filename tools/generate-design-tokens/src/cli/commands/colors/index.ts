import fse from "fs-extra";
import os from "os";
import { resolve } from "path";
import Figma from "../../../api";
import { FIGMA_COLORS_NODE_ID } from "../../../constants";
import { reporter } from "../../../reporter";
import { Color } from "../../../typings";

export async function colors() {
  const api = new Figma();
  const path = resolve(process.cwd(), "src");

  const { data } = await api.getPage(FIGMA_COLORS_NODE_ID);
  const styles = data.nodes[FIGMA_COLORS_NODE_ID]!.styles;

  if (!styles) {
    reporter.error(
      "No styles found in the Figma node. Ensure that FIGMA_COLORS_NODE_ID is set to the correct node."
    );
    process.exit(1);
  }

  const colorStylesIds = Object.entries(styles).reduce((acc, [key, values]) => {
    if (values.styleType === "FILL") {
      acc.push(key);
    }

    return acc;
  }, [] as string[]);

  const {
    data: { nodes },
  } = await api.getStyleNodes(colorStylesIds);

  const colors = Object.values(nodes).reduce((acc, values) => {
    const [theme, domain, identifier] = values.document.name
      .toLowerCase()
      .split("/");
    const validThemes = ["light", "dark"];

    /**
     * If the style name is in the format of "theme/domain/identifier"
     * and the theme is valid, then we can add it to the theme object.
     * Otherwise, we assume that it is invalid and was not intended to be
     * used in the design system.
     */
    if (theme && domain && identifier && validThemes.includes(theme)) {
      const { color } = values.document.fills[0]!;
      const hsla = convertRGBAtoHSLA(color);

      // If the theme does not exist, create it.
      if (!acc[theme]) {
        acc[theme] = {};
      }

      // If the domain does not exist, create it.
      if (!acc[theme]![domain]) {
        acc[theme]![domain] = {};
      }

      const cleanIdentifier = identifier.replace(/\$/g, "");

      acc[theme]![domain]![cleanIdentifier] = hsla;
    } else {
      reporter.warn(
        `The color style "${values.document.name}" is not in the correct format. It should be in the format of "theme/domain/identifier". The passed value was "${theme}/${domain}/${identifier}". Skipping...`
      );
    }

    return acc;
  }, {} as Record<string, Record<string, Record<string, string>>>);

  Object.entries(colors).map(([theme, domains]) => {
    const themePath = resolve(path, theme);

    const themeSuffix =
      theme === "light" ? "" : `${theme[0]?.toUpperCase()}${theme.slice(1)}`;

    let dirExists = false;

    try {
      fse.ensureDirSync(themePath);
      dirExists = true;
    } catch (_) {
      dirExists = false;
    }

    if (!dirExists) {
      reporter.warn(`The directory "${themePath}" does not exist. Creating...`);
      fse.mkdirSync(themePath);
    }

    Object.entries(domains).forEach(async ([domain, identifiers]) => {
      const fileName = `${domain}.ts`;
      const objectName = `${camelize(domain)}${themeSuffix}`;

      let fileContent =
        `/**${os.EOL} * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}export const ${objectName} = {` +
        os.EOL;

      Object.entries(identifiers).forEach(([identifier, value]) => {
        fileContent += `  ${camelize(identifier)}: "${value}",` + os.EOL;
      });

      fileContent += `};` + os.EOL;

      fse.outputFileSync(resolve(themePath, fileName), fileContent);
    });

    const files = fse.readdirSync(themePath);

    let indexContent = `/**${os.EOL} * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}`;

    files
      .filter((f) => f !== "index.ts")
      .forEach((file) => {
        const [domain] = file.split(".");
        const objectName = `${camelize(domain!)}${themeSuffix}`;

        indexContent += `export { ${objectName} } from "./${domain}";` + os.EOL;
      });

    fse.outputFileSync(resolve(themePath, "index.ts"), indexContent);

    reporter.success(
      `Color tokens for the "${theme}" theme was generated successfully!`
    );
  });

  const indexContent = `/**${os.EOL} * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}export * from "./light";${os.EOL}export * from "./dark";${os.EOL}`;

  fse.outputFileSync(resolve(path, "index.ts"), indexContent);

  reporter.success("Colors generated successfully!");
}

function convertRGBAtoHSLA(rgba: Color) {
  let { r, g, b, a } = rgba;

  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b);
  let cmax = Math.max(r, g, b);
  let delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta == 0) {
    h = 0;
  } else if (cmax == r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax == g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;

  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return `hsla(${h},${s}%,${l}%,${a})`;
}

function camelize(s: string) {
  return s.replace(/-./g, (x) => x[1]!.toUpperCase());
}
