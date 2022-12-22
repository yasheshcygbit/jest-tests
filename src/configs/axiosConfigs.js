import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/';
export const apiGet = (url) => {
  return axios.get(url, {
    baseURL: BASE_URL
  });
}