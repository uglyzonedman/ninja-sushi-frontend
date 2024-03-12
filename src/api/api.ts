import axios from "axios";
import Cookies from "js-cookie";
// export const URL = `http://localhost:8080/api-v2`;
export const URL = `http://194.169.160.152:8081/api-v2/`;

export const $apiWithToken = axios.create({
  withCredentials: true,
  baseURL: URL,
});

export const $apiWithoutToken = axios.create({
  withCredentials: true,
  baseURL: URL,
});

$apiWithToken.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get("accessToken")}`;
  return config;
});
