import axios, { AxiosInstance } from "axios";

export const InstanceAxios: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
