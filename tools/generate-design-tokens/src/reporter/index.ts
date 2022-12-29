import cliProgress from "cli-progress";
import colors from "picocolors";
import PrettyError from "pretty-error";

class Reporter {
  private _prefix: string;
  private _errorFormatter: PrettyError;

  constructor() {
    this._prefix = "[perseus-gi]:";
    this._errorFormatter = new PrettyError();
  }

  public error = (message: string) => {
    this._log("error", colors.red(message));
  };

  public warn = (message: string) => {
    this._log("error", colors.yellow(message));
  };

  public prettyError = (error: Error) => {
    this.error("An unexpected error occurred. See below for details.");
    console.log(this._errorFormatter.render(error));
  };

  public log = (message: string) => {
    this._log("log", message);
  };

  public success = (message: string) => {
    this._log("success", message);
  };

  public countdown = async (message: string, time: number) => {
    const bar = new cliProgress.SingleBar({
      format: `${this._prefix} ${message} | ${colors.green(
        "{bar}"
      )} | {percentage}% | {value}/{total} seconds`,
      barCompleteChar: "\u2588",
      barIncompleteChar: "\u2591",
      hideCursor: true,
    });

    bar.start(time, 0);

    for (let i = 0; i < time; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      bar.increment();
    }

    bar.stop();
  };

  public invalidEnvVariables = () => {
    this.error(
      `Invalid environment variables. See below what variables are missing:\n`
    );

    console.log(
      `${colors.red("✖")}  ${colors.white(colors.bold("FIGMA_ACCESS_TOKEN"))}`
    );

    console.log(
      colors.red("\nPlease set the missing variables and try again.\n")
    );
  };

  public introduction = () => {
    console.clear();
    this.log(`Initializing icon generation`);
  };

  private _log = (
    level: "log" | "warn" | "error" | "success",
    message: string
  ) => {
    const logLevel = level === "success" ? "log" : level;
    const color = {
      log: colors.white,
      warn: colors.yellow,
      error: colors.red,
      success: colors.green,
    }[level];

    console[logLevel](color(`${this._prefix} ${message}`));
  };
}

export const reporter = new Reporter();
