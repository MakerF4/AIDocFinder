// axiosInstance.js or similar file
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Use the base URL from environment variables
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token) {
      config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default axiosInstance;

