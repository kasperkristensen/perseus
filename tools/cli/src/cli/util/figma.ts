import { Figma } from "@medusa-ui/figma-api";
import * as dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({
  path: resolve(process.cwd(), ".env"),
});

const token = process.env.FIGMA_ACCESS_TOKEN || "";

export const figma = new Figma({
  accessToken: token,
});
