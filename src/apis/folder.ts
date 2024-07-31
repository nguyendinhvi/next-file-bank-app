import { httpClient } from "@/https/httpClient";
import { Folder, IFormDataFolderCreate } from "@/@interfaces/model/folder";
import { User } from "@/@interfaces/model/user";
import { AxiosRequestConfig } from "axios";
import { httpServer } from "@/https/httpServer";

export const create = (
  data: IFormDataFolderCreate,
  config?: AxiosRequestConfig
) => {
  return httpClient.post<any, User>(`/folder`, data, config);
};

export const getMyFolder = (config?: AxiosRequestConfig) => {
  return httpClient.get<Folder[], User>(`/folder/my-folder`, config);
};

export const getFolderById = (id: string, config?: AxiosRequestConfig) => {
  if (!id) return;
  return httpServer.get<Folder>(`/folder/${id}`, config);
};

export const folderApi = {
  create,
  getMyFolder,
  getFolderById,
};
