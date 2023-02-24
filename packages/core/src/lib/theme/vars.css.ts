import { typography } from "@medusa-ui/tokens";
import { createThemeContract } from "@vanilla-extract/css";
import { createDefaultEffects } from "../utils/create-default-effects";
import { createDefaultSchema } from "../utils/create-default-schema";

export const vars = createThemeContract({
  colors: createDefaultSchema("light"),
  typography: {
    body: typography.body,
    heading: typography.headersCore,
    codeBlock: typography.codeBlocks,
    labels: typography.labels,
  },
  effects: createDefaultEffects("light"),
});
