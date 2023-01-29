import { FrameInfo } from "@perseus/figma-api";
import * as fse from "fs-extra";
import { resolve } from "path";
import {
  FIGMA_FILE_ID,
  FIGMA_ICONS_NODE_ID,
  RATE_LIMIT,
} from "../../../constants";
import { figma, oraPromise, reporter } from "../../util";
import { getIconData, transformSVG } from "./helpers";
import {
  generateDomainIndex,
  generateRootIndex,
} from "./helpers/generate-index";

const path = resolve(process.cwd(), "src", "icons");

export const generateIcons = async () => {
  const skippedComponents: string[] = [];

  const fileComponents = await oraPromise(
    figma.getFileComponents(FIGMA_FILE_ID),
    {
      text: "Fetching components from Figma",
    }
  );

  const iconNodeMap = fileComponents.data.meta.components.reduce(
    (acc, component) => {
      const frameInfo = component.containing_frame as FrameInfo;

      if (frameInfo.pageId !== FIGMA_ICONS_NODE_ID) {
        return acc;
      }

      if (!acc[frameInfo.name]) {
        acc[frameInfo.name] = [];
      }

      acc[frameInfo.name]!.push({
        node_id: component.node_id,
        name: component.name,
      });

      return acc;
    },
    {} as Record<string, { node_id: string; name: string }[]>
  );

  for (const [frameName, components] of Object.entries(iconNodeMap)) {
    const framePath = resolve(path, frameName.toLowerCase());

    let dirExists = true;

    try {
      await fse.ensureDir(framePath);
    } catch (_e) {
      dirExists = false;
    }

    if (!dirExists) {
      await oraPromise(fse.mkdir(framePath), {
        text: `Creating directory for ${frameName}`,
        onError: `Failed to create directory for ${frameName}`,
        onSuccess: `Created directory for ${frameName}`,
      });
    }

    const URLData = await oraPromise(
      figma.getImage(FIGMA_FILE_ID, {
        ids: components.map((c) => c.node_id),
        format: "svg",
      }),
      {
        text: `Fetching SVGs for ${frameName}`,
        onError: `Failed to fetch SVGs for ${frameName}`,
        onSuccess: `Fetched SVGs for ${frameName}`,
      }
    );
    const length = components.length;

    for (let i = 0; i < length; i += RATE_LIMIT) {
      const slice = components.slice(i, i + RATE_LIMIT);

      const requests = slice.map(async (icon) => {
        const URL = URLData.data.images[icon.node_id];

        if (!URL) {
          reporter.error(
            `Failed to get URL for ${icon.name}. See above error message.`
          );
          skippedComponents.push(icon.name);
          return;
        }

        const DOM = await figma.getDOM(URL).catch((e) => {
          reporter.prettyError(e);

          return null;
        });

        if (!DOM) {
          reporter.error(
            `Failed to get DOM for ${icon.name}. See above error message.`
          );
          skippedComponents.push(icon.name);
          return;
        }

        const { componentName, fileName, fixedColor } = getIconData(icon.name);

        const reactComponent = await oraPromise(
          transformSVG({
            componentName: componentName,
            DOM: DOM.data,
            fixedColor: fixedColor,
          }),
          {
            text: `Transforming ${componentName}`,
            onError: `Failed to transform ${componentName}`,
            onSuccess: `Transformed ${componentName} to React component`,
          }
        );

        if (!reactComponent) {
          skippedComponents.push(icon.name);
          return;
        }

        const filePath = resolve(framePath, `${fileName}`);

        await fse.ensureDir(framePath);
        await oraPromise(fse.outputFile(filePath, reactComponent), {
          text: `\nWriting ${componentName} to ${filePath}`,
          onError: `Failed to write ${componentName} to ${filePath}`,
          onSuccess: `Wrote ${componentName} to ${filePath}`,
        });
      });

      await Promise.all(requests);
    }

    await generateDomainIndex(framePath);
  }

  await generateRootIndex(path);
};
