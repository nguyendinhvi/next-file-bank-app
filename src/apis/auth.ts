import { httpClient } from "@/https/httpClient";
import { ILoginResponse } from "@/@interfaces/common/api-response";
import { IFormDataLogin, IFormDataSignUp } from "@/@interfaces/common/auth";
import { User } from "@/@interfaces/model/user";
import { AxiosRequestConfig } from "axios";

const login = (data: IFormDataLogin, config?: AxiosRequestConfig) => {
  return httpClient.post<IFormDataLogin, ILoginResponse>(
    `/auth/login`,
    data,
    config
  );
};

const signup = (data: IFormDataSignUp, config?: AxiosRequestConfig) => {
  return httpClient.post<IFormDataSignUp, ILoginResponse>(
    `/auth/signup`,
    data,
    config
  );
};

export const authAPI = {
  login,
  signup,
};
