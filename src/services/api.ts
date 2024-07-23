import axios, { ResponseType } from 'axios';

const { VITE_MEDIA_API_URL, VITE_BRAPI_API_URL, VITE_CRYPTO_COMPARE_API_URL } = import.meta.env;

const mediaBaseURL = VITE_MEDIA_API_URL || 'https://media-download.onrender.com';
const brapiBaseURL = VITE_BRAPI_API_URL || 'https://brapi.dev/';
const cryptoCompareBaseURL = VITE_CRYPTO_COMPARE_API_URL || 'https://min-api.cryptocompare.com/';

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
