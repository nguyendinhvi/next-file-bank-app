import { File } from "@/@interfaces/model";
import { httpClient } from "@/https/httpClient";
import { AxiosRequestConfig } from "axios";

export const upload = (data: any, config?: AxiosRequestConfig) => {
  return httpClient.post<any, any>(`/file/upload`, data, config);
};

export const getMyFiles = (config?: AxiosRequestConfig) => {
  return httpClient.get<any, File[]>(`/file/my-files`, config);
};

export const FileAPI = { upload, getMyFiles };
