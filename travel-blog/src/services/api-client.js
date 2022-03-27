import axios from "axios";
import router from '../router'

export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  return config;
});

apiClient.interceptors.response.use(null, function(error) {
  if (error.response.status === 401) {
    localStorage.clear();
    router.push('/login')
  }
  return Promise.reject(error);
});

apiClient.interceptors.response.use((response) => {
  return response;
});

