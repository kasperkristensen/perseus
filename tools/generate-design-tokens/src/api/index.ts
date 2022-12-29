import axios, { AxiosInstance } from "axios";
import { FIGMA_BASE_URL, FIGMA_FILE_ID } from "../constants";
import { reporter } from "../reporter";
import { FigmaFile, FigmaFileNodes, FigmaImageNode } from "../typings";

class Figma {
  private _api: AxiosInstance;

  constructor() {
    this._validateEnv();
    this._api = this._createClient();
  }

  public getPage = async (pageId: string) => {
    return await this._api.get<FigmaFile>(
      `files/${FIGMA_FILE_ID}/nodes?ids=${pageId}`
    );
  };

  public getImage = async (id: string) => {
    return await this._api.get<FigmaImageNode>(
      `images/${FIGMA_FILE_ID}/?ids=${id}&format=svg`
    );
  };

  public getDOM = async (url: string) => {
    return await axios.get(url);
  };

  public getStyleNodes = async (ids: string[]) => {
    return await this._api.get<FigmaFileNodes>(
      `files/${FIGMA_FILE_ID}/nodes?ids=${ids.join(",")}`
    );
  };

  private _validateEnv = () => {
    const isValid = !!process.env.FIGMA_ACCESS_TOKEN;

    if (!isValid) {
      reporter.invalidEnvVariables();
      process.exit(1);
    }
  };

  private _createClient = () => {
    return axios.create({
      baseURL: FIGMA_BASE_URL,
      headers: {
        "X-FIGMA-TOKEN": process.env.FIGMA_ACCESS_TOKEN,
      },
    });
  };
}

export default Figma;
