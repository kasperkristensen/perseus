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

  public invalidEnvVariables = (variables: Record<string, boolean>) => {
    this.error(
      "Invalid environment variables. See below what variables are missing:\n"
    );

    const maxKeyLength = Math.max(
      ...Object.keys(variables).map((key) => key.length)
    );

    const state = Object.entries(variables).reduce((acc, [key, value]) => {
      const color = value ? colors.green : colors.red;
      const space = " ".repeat(maxKeyLength - key.length + 6);
      acc[key] = color(
        `${colors.white(colors.bold(key))}${space}${value ? "✔" : "✖"}`
      );
      return acc;
    }, {} as Record<string, string>);

    Object.values(state).map((value) =>
      console.log(`${colors.cyan("➜")} ${value}`)
    );

    console.log(
      colors.red("\nPlease add the missing variables to your .env file.\n")
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
