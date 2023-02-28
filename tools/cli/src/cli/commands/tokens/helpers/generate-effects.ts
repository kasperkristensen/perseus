import { Effect, RectangleNode, Style } from "@medusa-ui/figma-api";
import * as fse from "fs-extra";
import * as os from "os";
import { resolve } from "path";
import { FIGMA_FILE_ID } from "../../../../constants";
import { camelCase, figma, reporter } from "../../../util";
import { convertColorToRGBA } from "../../../util/convert-color-to-rgba";

/**
 * Generates effects tokens
 * @note We currently only use drop shadows in our design system so the function only looks for shadows
 * when generating the tokens. If we ever use other effects we will need to update this function.
 *
 */
export const generateEffects = async (styles: Style[], basePath: string) => {
  const path = resolve(basePath, "effects");

  const nodes = await figma
    .getFileNodes(FIGMA_FILE_ID, {
      ids: styles.map((effect) => effect.node_id),
    })
    .then(({ data }) => {
      return data.nodes;
    })
    .catch((err) => {
      reporter.prettyError(err);
      process.exit(1);
    });

  const effects: Record<string, Record<string, Record<string, string>>> = {};

  Object.values(nodes).forEach((value) => {
    const node = value.document as RectangleNode;

    const [theme, domain_, identifier] = node.name.toLowerCase().split("/");

    if (theme && identifier) {
      if (!effects[theme]) {
        effects[theme] = {};
      }

      if (!effects[theme]!["shadows"]) {
        effects[theme]!["shadows"] = {};
      }

      const shadowEffects = node.effects.filter(filterShadows);

      const hasNonDropShadow = node.effects.some(
        (e) => e.type !== "DROP_SHADOW"
      );

      if (hasNonDropShadow) {
        reporter.warn(
          "The CLI currently only supports drop shadows. Only the drop shadow styles will be generated."
        );
      }

      let boxShadow = "";

      /**
       * If there is more than one shadow effect, we need to create a box-shadow value that contains
       * all of the shadow effects.
       */
      if (shadowEffects.length > 1) {
        /**
         * We need to sort the shadows by radius so that the box-shadow value is in the correct order.
         * If we don't do this, the box-shadow value will be incorrect, and the lesser/inner shadow will
         * be behind the greater/outer shadow.
         */
        const sorted = shadowEffects.sort(
          ({ spread: spreadA = 0 }, { spread: spreadB = 0 }) => {
            return spreadA - spreadB;
          }
        );

        boxShadow = sorted
          .map((effect) => {
            const {
              color,
              offset: { x, y },
              radius,
              spread = 0,
            } = effect;

            const rgba = convertColorToRGBA(color);

            return `${x}px ${y}px ${radius}px ${spread}px ${rgba}`;
          })
          .join(", ");
      } else {
        const {
          color,
          offset: { x, y },
          radius,
          spread = 0,
        } = node.effects[0]!;

        const rgba = convertColorToRGBA(color);

        boxShadow = `${x}px ${y}px ${radius}px ${spread}px ${rgba}`;
      }

      effects[theme]["shadows"][identifier] = boxShadow;
    } else {
      reporter.warn(
        `The shadow style "${node.name}" is not in the correct format. It should be in the format of "domain/identifier". The passed value was "${node.name}". Skipping`
      );
    }
  });

  const promises = Object.entries(effects).map(async ([theme, domains]) => {
    const themePath = resolve(path, theme);
    const suffix =
      theme === "light" ? "" : `${theme[0]?.toUpperCase()}${theme.slice(1)}`;
    let dirExists = false;

    try {
      await fse.ensureDir(themePath);
      dirExists = true;
    } catch (_) {
      dirExists = false;
    }

    if (!dirExists) {
      await fse.mkdir(themePath);
    }

    const subpromises = Object.entries(domains).map(
      async ([domain, identifiers]) => {
        const fileName = `${domain}.ts`;
        const objectName = `${camelCase(domain)}${suffix}`;

        let fileContent =
          `/**${os.EOL} * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}export const ${objectName} = {` +
          os.EOL;

        Object.entries(identifiers).forEach(([identifier, value]) => {
          fileContent += `  ${camelCase(identifier)}: "${value}",` + os.EOL;
        });

        fileContent += `};` + os.EOL;

        fse.outputFileSync(resolve(themePath, fileName), fileContent);
      }
    );

    await Promise.all(subpromises);

    const files = await fse.readdir(themePath);

    const themeIndexContent = `/**${
      os.EOL
    } * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}${files
      .map((file) => `export * from "./${file.replace(".ts", "")}";`)
      .join(os.EOL)}`;

    await fse.outputFile(resolve(themePath, "index.ts"), themeIndexContent);
  });

  await Promise.all(promises);

  const indexContent = `/**${os.EOL} * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}export * from "./light";${os.EOL}export * from "./dark";${os.EOL}`;

  await fse.outputFile(resolve(path, "index.ts"), indexContent);
};

const filterShadows = (effect: Effect) => {
  return effect.type === "DROP_SHADOW" && effect.visible;
};
