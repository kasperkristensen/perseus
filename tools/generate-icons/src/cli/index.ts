import dotenv from "dotenv";
import { resolve } from "path";
import { generate } from "./commands";

dotenv.config({
  path: resolve(process.cwd(), ".env"),
});

generate();
