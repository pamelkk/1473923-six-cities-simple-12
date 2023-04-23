import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

const URL_API = 'https://12.react.pages.academy/six-cities';
const TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_API,
    timeout: TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    }
  );

  return api;
};
