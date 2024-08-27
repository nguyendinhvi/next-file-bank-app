import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { config } from "../../configs";

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = "";

    if (token != null) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    throw new Error(error);
  }
};

class Https {
  private instance: AxiosInstance | null = null;
  private headers: Readonly<Record<string, string | boolean>> = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Credentials": true,
    "X-Requested-With": "XMLHttpRequest",
  };

  constructor(token?: string) {
    if (token) this.headers = { ...this.headers, "x-access-token": token };
  }

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const https = axios.create({
      baseURL: config["API_URL"],
      headers: this.headers,
    });

    https.interceptors.request.use(injectToken as any, (error) =>
      Promise.reject(error)
    );

    https.interceptors.response.use(
      (response) => response?.data?.data,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = https;
    return https;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  private handleError(error: any) {
    return Promise.reject(error);
  }
}

export const https = (token?: string) => new Https(token);
