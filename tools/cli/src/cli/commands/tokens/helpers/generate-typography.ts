import { Style } from "@medusa-ui/figma-api";
import { resolve } from "path";

export const generateTypography = async (
  typography: Style[],
  basePath: string
) => {
  const path = resolve(basePath, "typography");

  return {};
};
