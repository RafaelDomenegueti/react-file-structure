import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const Api = axios.create({
  baseURL: API_URL,
});

export default Api;
