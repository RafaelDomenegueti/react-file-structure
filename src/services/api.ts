import axios from "axios";
const { API_URL } = process.env;

const Api = axios.create({
  baseURL: API_URL,
});

export default Api;