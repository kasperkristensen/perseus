import axios, { AxiosInstance } from "axios";
import { ENV_VARIABLES } from "../constants";
import { reporter } from "../reporter";
import { FigmaFile, FigmaImageNode } from "../typings";

class Figma {
  private _api: AxiosInstance;

  constructor() {
    this._validateEnv();
    this._api = this._createClient();
  }

  public getFile = async () => {
    return await this._api.get<FigmaFile>(
      `files/${process.env.FIGMA_PROJECT_ID}/nodes?ids=${process.env.FIGMA_PROJECT_NODE_ID}`
    );
  };

  public getImage = async (id: string) => {
    return await this._api.get<FigmaImageNode>(
      `images/${process.env.FIGMA_PROJECT_ID}/?ids=${id}&format=svg`
    );
  };

  public getDOM = async (url: string) => {
    return await axios.get(url);
  };

  private _validateEnv = () => {
    const status = ENV_VARIABLES.reduce((acc, variable) => {
      acc[variable] = !!process.env[variable];
      return acc;
    }, {} as Record<string, boolean>);

    const isValid = Object.values(status).every(Boolean);

    if (!isValid) {
      const variables = Object.entries(status).reduce((acc, [key, value]) => {
        acc[key] = !!value;
        return acc;
      }, {} as Record<string, boolean>);

      reporter.invalidEnvVariables(variables);

      process.exit(1);
    }
  };

  private _createClient = () => {
    return axios.create({
      baseURL: process.env.FIGMA_BASE_URL,
      headers: {
        "X-FIGMA-TOKEN": process.env.FIGMA_ACCESS_TOKEN,
      },
    });
  };
}

export default Figma;
