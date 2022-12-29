import { Command } from "commander";
import dotenv from "dotenv";
import { resolve } from "path";
import { colors, icons } from "./commands";

dotenv.config({
  path: resolve(process.cwd(), ".env"),
});

const program = new Command();

program.description("Generate design tokens from Figma");

program.command("colors").description("Generate color tokens").action(colors);
program.command("icons").description("Generate icon components").action(icons);

program.parse();
