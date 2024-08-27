import { httpClient } from "@/https/httpClient";
import { Folder, IFormDataFolderCreate } from "@/@interfaces/model/folder";
import { User } from "@/@interfaces/model/user";
import { AxiosRequestConfig } from "axios";
import { httpServer } from "@/https/httpServer";
import { https } from "@/https/https";

export const create = (
  data: IFormDataFolderCreate,
  config?: AxiosRequestConfig
) => {
  return httpClient.post<any, User>(`/folder`, data, config);
};

export const getMyFolder = (config?: AxiosRequestConfig) => {
  return httpClient.get<Folder[], Folder[]>(`/folder/my-folder`, config);
};

export const getFolderById = (
  id: string,
  config?: AxiosRequestConfig,
  token?: string
) => {
  return https(token).get<any, Folder>(`/folder/${id}`, config);
};

export const folderAPI = {
  create,
  getMyFolder,
  getFolderById,
};
