import type { Style, StyleType } from "@medusa-ui/figma-api";
import { resolve } from "path";
import { FIGMA_FILE_ID } from "../../../constants";
import { oraPromise } from "../../util";
import { figma } from "../../util/figma";
import { reporter } from "../../util/reporter";
import { generateColors, generateEffects, generateTypography } from "./helpers";

const src = resolve(process.cwd(), "src");

export const generateTokens = async () => {
  const {
    meta: { styles },
  } = await figma
    .getFileStyles(FIGMA_FILE_ID)
    .then(({ data }) => data)
    .catch((err) => {
      reporter.prettyError(err);
      process.exit(1);
    });

  const styleMap = styles.reduce((acc, style) => {
    if (acc[style.style_type]) {
      acc[style.style_type].push(style);
    } else {
      acc[style.style_type] = [style];
    }
    return acc;
  }, {} as Record<StyleType, Style[]>);

  await oraPromise(generateColors(styleMap.FILL, src), {
    text: "Generating color tokens",
    onError: "Failed to generate color tokens",
    onSuccess: "Generated color tokens",
  });

  await oraPromise(generateEffects(styleMap.EFFECT, src), {
    text: "Generating effect tokens",
    onError: "Failed to generate effect tokens",
    onSuccess: "Generated effect tokens",
  });

  await oraPromise(generateTypography(styleMap.TEXT, src), {
    text: "Generating typography tokens",
    onError: "Failed to generate typography tokens",
    onSuccess: "Generated typography tokens",
  });
};
