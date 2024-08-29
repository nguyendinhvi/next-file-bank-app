import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { config } from "../../configs";
import { Cookie } from "@/helpers/cookie";
// import config from "../configs/local.json";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

interface ExtendAxiosRequestConfig extends AxiosRequestConfig {
  headers: { "x-access-token": string; "Content-Type": string };
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  // "Content-Type": "multipart/form-data",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
  // "x-access-token": Cookie.getCookie("token"),
};

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = (
  config: ExtendAxiosRequestConfig
): ExtendAxiosRequestConfig => {
  try {
    const token = Cookie.getCookie("token");

    if (token != null) {
      config.headers["x-access-token"] = token;
    }

    if (config.url === "/file/upload") {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  } catch (error: any) {
    throw new Error(error);
  }
};

class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const httpServer = axios.create({
      baseURL: config["API_URL"],
      headers,
      // timeout: 1000 * 10,
      // withCredentials: true,
    });

    httpServer.interceptors.request.use(injectToken as any, (error) =>
      Promise.reject(error)
    );

    httpServer.interceptors.response.use(
      (response) => response?.data?.data,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = httpServer;
    return httpServer;
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

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private handleError(error: AxiosResponse) {
    // const { status } = error;

    // switch (status) {
    //   case StatusCode.InternalServerError: {
    //     // Handle InternalServerError
    //     break;
    //   }
    //   case StatusCode.Forbidden: {
    //     // Handle Forbidden
    //     break;
    //   }
    //   case StatusCode.Unauthorized: {
    //     // Handle Unauthorized
    //     break;
    //   }
    //   case StatusCode.TooManyRequests: {
    //     // Handle TooManyRequests
    //     break;
    //   }
    // }

    // const { data, status } = error;

    return Promise.reject(error);
  }
}

export const httpClient = new Http();
