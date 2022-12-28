import { transform } from "@svgr/core";
import jsx from "@svgr/plugin-jsx";
import prettier from "@svgr/plugin-prettier";
import svgo from "@svgr/plugin-svgo";
import fse from "fs-extra";
import os from "os";
import { resolve } from "path";
import Figma from "../../../api";
import { RATE_LIMIT, WAIT_TIME } from "../../../constants";
import { reporter } from "../../../reporter";
import { FigmaEntry } from "../../../typings";
import defaultTemplate from "./templates/default-template";
import fixedColorTemplate from "./templates/fixed-color-template";

export async function generate() {
  const api = new Figma();
  const path = resolve(process.cwd(), "src", "icons");

  reporter.introduction();

  try {
    const { data } = await api.getFile();
    const children =
      data.nodes[process.env.FIGMA_PROJECT_NODE_ID!]!.document.children;

    if (!children) {
      reporter.error(
        "No children found in the Figma file. Ensure that you have the correct project id and node id set in the .env file"
      );
      process.exit(1);
    }

    const components = getComponents(children);
    const length = components.length;

    for (let i = 0; i < length; i += RATE_LIMIT) {
      const slice = components.slice(i, i + RATE_LIMIT);

      const requests = slice.map(async (svg) => {
        const { componentName, fileName, fixedColor } = getIconData(svg.name);

        const URL = await api.getImage(svg.id);
        const DOM = await api.getDOM(URL.data.images[svg.id]!);

        const reactComponent = await transformSVG({
          componentName,
          DOM: DOM.data,
          fixedColor,
        });

        if (!reactComponent) {
          reporter.error(`Failed to generate ${componentName}`);
        }

        const filePath = resolve(path, fileName);

        await fse.ensureDir(path);
        await fse.outputFile(filePath, reactComponent);

        reporter.success(`Generated ${componentName} at ${filePath}`);
      });

      await Promise.all(requests);

      if (i + RATE_LIMIT < length) {
        await reporter.countdown("Waiting for rate limit", WAIT_TIME);
      }
    }
  } catch (error) {
    reporter.prettyError(error as Error);
    process.exit(1);
  }

  await generateIndex(path);
}

function isTypeMatch(type: string) {
  return type === "COMPONENT" || type === "INSTANCE";
}

function getComponents(children: FigmaEntry[]) {
  return children.reduce((acc, child) => {
    if (isTypeMatch(child.type)) {
      acc.push(child);
    }

    if (child.children) {
      acc.push(...getComponents(child.children));
    }

    return acc;
  }, [] as FigmaEntry[]);
}

function getComponentName(name: string) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(
      /\s+(.)(\w*)/g,
      (_$1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(/\w/, (s) => s.toUpperCase());
}

function getFileName(name: string) {
  return `${name.replace("$", "").replace("/", "-")}.tsx`;
}

function getIconData(name: string) {
  const componentName = getComponentName(name);
  const fileName = getFileName(name);
  const fixedColor = fileName.includes("-color");

  return {
    componentName,
    fileName,
    fixedColor,
  };
}

async function transformSVG({
  DOM,
  componentName,
  fixedColor,
}: {
  DOM: string;
  componentName: string;
  fixedColor: boolean;
}) {
  return await transform(
    DOM,
    {
      typescript: true,
      replaceAttrValues: !fixedColor
        ? {
            "#11181C": "{color}",
          }
        : undefined,
      ref: true,
      expandProps: "end",
      plugins: [svgo, jsx, prettier],
      template: fixedColor ? fixedColorTemplate : defaultTemplate,
    },
    {
      componentName,
    }
  );
}

async function generateIndex(path: string) {
  let index =
    `
    /**
     * This file is automatically generated.
     * Please do not change this file!
     */
    ` + os.EOL;

  const files = await fse.readdir(path);

  files
    .filter((f) => f !== "index.ts")
    .forEach((file) => {
      const name = file.replace(".tsx", "");
      const componentName = getComponentName(name);

      index +=
        `export { default as ${componentName} } from "./${name}";` + os.EOL;
    });

  await fse.writeFile(resolve(path, "index.ts"), index);
}
