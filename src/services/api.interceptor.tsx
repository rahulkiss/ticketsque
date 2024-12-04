import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Create an Axios instance
const api: AxiosInstance = axios.create({
  baseURL: 'https://d2igd0kw1qfnt9.cloudfront.net',
  timeout: 10000, // Set a request timeout
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add headers or authentication tokens here before making requests
    console.log('Request sent:', config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.status == 200) {
      return response; 
    } else {
      console.error('Error response:', response.data.message);
      // Reject with the error message if success is false
      return Promise.reject(new Error(response.data.message));
    }
  },
  (error) => {
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

export default api;
