import { createThemeContract } from "@vanilla-extract/css";
import { createDefaultSchema } from "../create-default-schema";

export const vars = createThemeContract({
  colors: createDefaultSchema("light"),
});
