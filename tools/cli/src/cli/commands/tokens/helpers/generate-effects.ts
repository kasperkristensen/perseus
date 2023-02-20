import { RectangleNode, Style } from "@medusa-ui/figma-api";
import { resolve } from "path";
import { FIGMA_FILE_ID } from "../../../../constants";
import { figma, reporter } from "../../../util";

export const generateEffects = async (effects: Style[], basePath: string) => {
  const path = resolve(basePath, "effects");

  const nodes = await figma
    .getFileNodes(FIGMA_FILE_ID, {
      ids: effects.map((effect) => effect.node_id),
    })
    .then(({ data }) => {
      return data.nodes;
    })
    .catch((err) => {
      reporter.prettyError(err);
      process.exit(1);
    });
};

const generateShadows = async (shadows: RectangleNode[], basePath: string) => {
  const path = resolve(basePath, "shadows");
};
