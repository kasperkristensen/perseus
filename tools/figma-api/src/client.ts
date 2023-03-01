import axios, { AxiosInstance, AxiosResponse } from "axios"
import axiosRetry from "axios-retry"
import qs from "qs"
import {
  GetFileComponentsResponse,
  GetFileNodesParams,
  GetFileNodesResponse,
  GetFileParams,
  GetFileResponse,
  GetFileStylesResponse,
  GetImageParams,
  GetImageResponse,
} from "./types"

const FIGMA_BASE_URL = "https://api.figma.com/v1/"

type FigmaClientOptions = {
  accessToken: string
}

class Figma {
  private _api: AxiosInstance

  constructor({ accessToken }: FigmaClientOptions) {
    this._api = this._createClient(accessToken)
  }

  public getFile = async (
    file_key: string,
    params?: GetFileParams,
  ): Promise<AxiosResponse<GetFileResponse>> => {
    let url = `files/${file_key}`

    if (params) {
      const query = qs.stringify(params)
      url = `${url}?${query}`
    }

    return await this._api.get(url)
  }

  public getFileNodes = async (
    file_key: string,
    params?: GetFileNodesParams,
  ): Promise<AxiosResponse<GetFileNodesResponse>> => {
    let url = `files/${file_key}/nodes`

    if (params) {
      const { ids, ...rest } = params
      const query = qs.stringify(rest)
      url = `${url}?${query}${ids.length ? `&ids=${ids.join(",")}` : ""}`
    }

    return await this._api.get(url)
  }

  public getImage = async (
    file_key: string,
    params: GetImageParams,
  ): Promise<AxiosResponse<GetImageResponse>> => {
    // const query = qs.stringify(params);
    return await this._api.get(
      `images/${file_key}?ids=${params.ids.join(",")}&format=${params.format}`,
    )
  }

  public getFileComponents = async (
    file_key: string,
  ): Promise<AxiosResponse<GetFileComponentsResponse>> => {
    return await this._api.get(`files/${file_key}/components`)
  }

  public getFileStyles = async (
    file_key: string,
  ): Promise<AxiosResponse<GetFileStylesResponse>> => {
    return await this._api.get(`files/${file_key}/styles`)
  }

  public getDOM = async (url: string) => {
    return await axios.get(url)
  }

  private _createClient = (accessToken: string) => {
    const client = axios.create({
      baseURL: FIGMA_BASE_URL,
      headers: {
        "X-FIGMA-TOKEN": accessToken,
      },
    })

    axiosRetry(client, {
      retries: 3,
      retryDelay: (retryCount) => {
        return retryCount * 1000
      },
    })

    return client
  }
}

export default Figma
