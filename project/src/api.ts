import axios, { AxiosInstance } from 'axios';

const URL_API = 'https://12.react.pages.academy/six-cities';
const TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_API,
    timeout: TIMEOUT
  });

  return api;
};
