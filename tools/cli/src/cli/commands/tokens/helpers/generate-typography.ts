import { Style, TextNode } from "@medusa-ui/figma-api";
import * as fse from "fs-extra";
import * as os from "os";
import { resolve } from "path";
import { FIGMA_FILE_ID } from "../../../../constants";
import { camelCase, figma, reporter } from "../../../util";

export const generateTypography = async (
  typographyStyles: Style[],
  basePath: string
) => {
  const path = resolve(basePath, "typography");

  const nodes = await figma
    .getFileNodes(FIGMA_FILE_ID, {
      ids: typographyStyles.map((typ) => typ.node_id),
    })
    .then(({ data }) => {
      return data.nodes;
    })
    .catch((err) => {
      reporter.prettyError(err);
      process.exit(1);
    });

  const typography: Record<string, Record<string, Record<string, string>>> = {};

  Object.values(nodes).forEach((value) => {
    const node = value.document as TextNode;

    const [use, identifier] = node.name.toLowerCase().split("/");

    if (use && identifier) {
      const fixedUse = camelCase(use.replace(/\s/g, "-"));

      if (!typography[fixedUse]) {
        typography[fixedUse] = {};
      }

      const { fontFamily, fontSize, fontWeight, letterSpacing, lineHeightPx } =
        node.style;

      // Remove "+" from identifier as it results in invalid CSS
      const fixedIdentifier = identifier.replace("+", "Plus");

      typography[fixedUse][fixedIdentifier] = {
        fontFamily,
        fontSize: `${fontSize}px`,
        fontWeight: `${fontWeight}`,
        letterSpacing: `${letterSpacing}px`,
        lineHeight: `${lineHeightPx}px`,
      };
    } else {
      reporter.warn(
        `The typography style "${node.name}" is not in the correct format. It should be in the format of "use/identifier". The passed value was "${node.name}". Skipping`
      );
    }
  });

  const promises = Object.entries(typography).map(async ([use, styles]) => {
    const usePath = resolve(path, use);

    let dirExists = false;

    try {
      await fse.ensureDir(usePath);
      dirExists = true;
    } catch (_) {
      dirExists = false;
    }

    if (!dirExists) {
      await fse.mkdir(usePath);
    }

    const subpromises = Object.entries(styles).map(
      async ([identifier, values]) => {
        const fileName = `${identifier}.ts`;

        let fileContents = `/**${os.EOL} * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}export const ${identifier} = {${os.EOL}`;

        Object.entries(values).forEach(([key, value]) => {
          fileContents += `  ${key}: "${value}",` + os.EOL;
        });

        fileContents += `};` + os.EOL;

        await fse.writeFile(resolve(usePath, fileName), fileContents);
      }
    );

    await Promise.all(subpromises);

    const files = await fse.readdir(usePath);

    const indexContents = `/**${
      os.EOL
    } * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}${files
      .map((file) => `export * from "./${file.replace(".ts", "")}";`)
      .join(os.EOL)}`;

    await fse.outputFile(resolve(usePath, "index.ts"), indexContents);
  });

  await Promise.all(promises);

  const files = await fse.readdir(path);

  const indexContents = `/**${
    os.EOL
  } * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}${files
    .map((file) => {
      const identifier = file.replace(".ts", "");

      return `export * as ${identifier} from "./${identifier}";`;
    })
    .join(os.EOL)}`;

  await fse.outputFile(resolve(path, "index.ts"), indexContents);
};
