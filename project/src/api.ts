import axios, { AxiosInstance } from 'axios';
import { APIRoute } from './const/const';

const URL_API = 'https://12.react.pages.academy/six-cities-simple/hotels';
const TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_API,
    timeout: TIMEOUT,
    url: APIRoute.hotels
  });

  return api;
};

// axios.get(URL_API, { timeout: TIMEOUT })
//   .then((response) => {
//     console.log(response.data);
//     store.dispatch(products.actions.reducer2(response.data.products));
//   })
//   .catch((err) => {
//     console.log(`Error`);
//   });

//   axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });
