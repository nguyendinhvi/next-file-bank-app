import { httpServer } from "@/https/httpServer";
import { User } from "@/@interfaces/model/user";
import { AxiosRequestConfig } from "axios";

export const getUserById = (id: string, config?: AxiosRequestConfig) => {
  return httpServer.get<any, User>(`/user/${id}`, config);
};

export const userAPI = {
  getUserById,
};
