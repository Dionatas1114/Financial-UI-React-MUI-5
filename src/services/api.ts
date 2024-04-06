import axios, { ResponseType } from 'axios';

const {
  REACT_APP_MEDIA_API_URL: mediaApibaseURL,
  REACT_APP_BRAPI_API_URL: brapiApibaseURL,
  REACT_APP_CRYPTO_COMPARE_API_URL: cryptoCompareApibaseURL,
} = process.env;

const mediaBaseURL = mediaApibaseURL || 'http://localhost:8080';
const brapiBaseURL = brapiApibaseURL || 'https://brapi.dev/';
const cryptoCompareBaseURL = cryptoCompareApibaseURL || 'https://min-api.cryptocompare.com/';

const clientInstance = (baseURL: string, responseType?: ResponseType, auth?: string) =>
  axios.create({
    baseURL,
    params: {
      apikey: auth,
    },
    responseType,
  });

const cryptoCompareApi = clientInstance(cryptoCompareBaseURL);
const brapiApi = clientInstance(brapiBaseURL);
const mediaApi = clientInstance(mediaBaseURL);
const mediaBlobApi = clientInstance(mediaBaseURL, 'blob');

export {
  brapiApi,
  brapiBaseURL,
  mediaBlobApi,
  mediaApi,
  mediaBaseURL,
  cryptoCompareApi,
  cryptoCompareBaseURL,
};
