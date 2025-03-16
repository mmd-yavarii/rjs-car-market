import axios from 'axios';

const API = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

API.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.message)
);

export default API;
