import axios from 'axios';

const brapiBaseURL = process.env.REACT_APP_BRAPI_API_URL || 'https://brapi.dev/';
const mediaURL = process.env.REACT_APP_MEDIA_API_URL || 'http://localhost:8080';

const clientInstance = (baseURL: string, auth?: string) =>
  axios.create({
    baseURL,
    params: {
      apikey: auth,
    },
    responseType: 'blob',
  });

const brapiApi = clientInstance(brapiBaseURL);
const mediaApi = clientInstance(mediaURL);

export { brapiApi, brapiBaseURL, mediaApi, mediaURL };
