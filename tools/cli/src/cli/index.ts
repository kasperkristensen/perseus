import { Command } from "commander";
import { generateIcons, generateTokens } from "./commands";

export async function createCli(): Promise<Command> {
  const program = new Command();

  program.description("Generate design tokens from Figma");

  program
    .command("tokens")
    .description("Generate Medusa UI tokens")
    .action(generateTokens);
  program
    .command("icons")
    .description("Generate icon components")
    .action(generateIcons);

  return program;
}
