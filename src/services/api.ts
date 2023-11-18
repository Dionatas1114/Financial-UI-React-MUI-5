import axios from 'axios';

const brapiBaseURL = process.env.REACT_APP_BRAPI_API_URL || 'https://brapi.dev/';

const clientInstance = (baseURL: string, auth?: string) =>
  axios.create({
    baseURL,
    params: {
      apikey: auth,
    },
  });

const brapiApi = clientInstance(brapiBaseURL);

export { brapiApi, brapiBaseURL };
