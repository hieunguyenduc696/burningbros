import _ from "lodash";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { InstanceAxios } from "../axios";

class HttpRestService {
  constructor(private axiosInstance: AxiosInstance) {}

  async get<T>(route: string, configs?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .get(route, configs)
      .then((data) => _.get(data, "data"))
      .catch((err) => {
        throw new Error(err);
      });
  }

  async post<P, R>(
    route: string,
    payload?: P,
    configs?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance
      .post(route, payload, configs)
      .then((data) => _.get(data, "data"))
      .catch((err) => {
        throw new Error(err);
      });
  }

  async patch<P, R>(
    route: string,
    payload?: P,
    configs?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance
      .patch(route, payload, configs)
      .then((data) => _.get(data, "data"))
      .catch((err) => {
        throw new Error(err);
      });
  }

  async put<P, R>(
    route: string,
    payload?: P,
    configs?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance
      .put(route, payload, configs)
      .then((data) => _.get(data, "data"))
      .catch((err) => {
        throw new Error(err);
      });
  }

  async delete<R>(route: string, configs?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance
      .delete(route, configs)
      .then((data) => _.get(data, "data"))
      .catch((err) => {
        throw new Error(err);
      });
  }
}

export const HttpService = new HttpRestService(InstanceAxios);
